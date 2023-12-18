import { v4 as uuidv4 } from "uuid";
import { userModel } from "../Models/userModel.js";

export async function addUsers(req, res) {
  try {
    const { name, age } = req.body;
    const userId = uuidv4();
    if (name && age) {
      const data = await userModel.create({ name, age, userId });
      res.send({
        code: 200,
        success: true,
        message: "Successfully added the user to the database",
        data: data,
      });
    } else {
      res.send({
        success: false,
        code: 400,
        message: "Please provide name and age",
      });
    }
  } catch (error) {
    console.log(
      `Error while adding the user to the database file : userController Method : addUsers Error : ${error}`
    );
  }
}

export async function getUsers(req, res) {
  try {
    let query = {};
    if (req.query.name) {
      query.name = { $regex: req.query.name, $options: "i" };
    }
    // Sorting by age
    const sortField = req.query.sortBy || "age";
    const sortOrder = req.query.order === "desc" ? -1 : 1;
    const sortOptions = { [sortField]: sortOrder };

    // Pagination
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 10;
    const skip = (page - 1) * limit;

    const users = await userModel
      .find(query)
      .sort(sortOptions)
      .skip(skip)
      .limit(limit);
    if (users && users.length === 0 && users === null && users === undefined) {
      res.send({
        success: false,
        message: "Users users found",
      });
    } else {
      res.send({
        success: true,
        message: "Successfully fetched the users",
        data: users,
      });
    }
  } catch (error) {
    res.status(500).send({
      success: "false",
      message: error,
    });
  }
}
