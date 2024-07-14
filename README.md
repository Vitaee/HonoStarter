# Hono MongoDB Bun.sh API

## Description

A RESTful API built with Hono and TypeScript, connected to MongoDB, and running on Bun.sh. This project demonstrates the implementation of CRUD operations, validation, and testing using modern web technologies.

## Features

- **CRUD Operations**: Create, Read, Update, Delete operations for resources.
- **Validation**: Input validation using `class-validator` and Hono's built-in validator.
- **Testing**: Comprehensive testing setup with Jest.
- **Environment Configuration**: Manage configuration using environment variables.
- **Modern Technologies**: Built with Hono, TypeScript, MongoDB, and Bun.sh.

## Getting Started

### Prerequisites

- [Bun.sh](https://bun.sh/)
- [Node.js](https://nodejs.org/)
- [MongoDB](https://www.mongodb.com/)

### Installation

1. Clone the repository:
    ```bash
    git clone https://github.com/Vitaee/HonoStarter.git
    ```
2. Navigate to the project directory:
    ```bash
    cd HonoStarter
    ```
3. Install dependencies:
    ```bash
    bun install
    ```
4. Set up environment variables:
    Create a `.env` file in the root directory and add your MongoDB connection details:
    ```plaintext
    DB_USER=your_db_user
    DB_PASS=your_db_password
    DB_HOST=your_db_host
    DB_PORT=your_db_port
    DB_DATABASE=your_db_name
    PORT=3000
    ```

### Running the Application

To start the application in development mode:
```bash
bun run dev
```

### Running Tests
To run tests:

```bash
bun run test
```

### Usage
The API will be available at http://localhost:3000.
You can access various endpoints like /users to perform CRUD operations.

### Contributing
Contributions are welcome! Please open an issue or submit a pull request for any improvements or bug fixes.