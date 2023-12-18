# Express.js Server with MongoDB

This is a simple Express.js server with MongoDB integration, providing endpoints for creating users and fetching users with filters, sorting, and pagination.

## Getting Started

1. Clone the repository:

   ```bash
   git clone <repository-url>
   cd <repository-folder>
2. add .env file add the desire port and mongo db connection string
3. npm install
4. npm start
5. The server will run on http://localhost:8000 (or the port specified in the environment variable PORT).
6. API Endpoints
    Create a new user
     Endpoint: POST /addusers
     Request Body:
     ```
       {
        "name": "pavan kumar",
        "age": 21
      }
   ```

Fetch users with filters, sorting, and pagination
Endpoint: GET /users
Query Parameters:
name (optional): Filter users by name.
sortBy (optional): Field to sort by (default is 'age').
order (optional): Sorting order ('asc' or 'desc', default is 'asc').
page (optional): Page number for pagination (default is 1).
limit (optional): Number of users per page (default is 10).

URL : curl http://localhost:3000/users?name=pavan&sortBy=age&order=asc&page=2&limit=10

