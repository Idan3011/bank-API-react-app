# Bank API Dashboard

## Overview

The **Bank API Dashboard** is a web application built using the React library that allows authorized administrators to access a comprehensive dashboard for managing users within the bank. With the appropriate credentials, administrators can view, add, delete users, as well as perform various operations such as depositing cash or credit to user accounts. The backend server, created using Express.js, handles the CRUD operations through well-defined API endpoints.

## Project Features

- **User Dashboard:** Administrators with the right credentials can access the users' dashboard, providing an overview of all users along with their holdings.

- **User Management:** Admins can add new users to the bank and delete existing users, providing efficient management of the user base.

- **Deposit Operations:** Admins can deposit funds to user accounts, either as cash or credit, facilitating financial transactions.

## Project Structure

The project is structured as a React application for the front end, communicating with an Express.js server on the backend. The server provides various endpoints to perform operations on user data stored in the backend.

## API Endpoints

### Get All Users

- **Endpoint:** `/`
- **Method:** GET
- **Description:** Retrieve details of all users in the bank.

### Create User

- **Endpoint:** `/`
- **Method:** POST
- **Description:** Add a new user to the bank.

### Get Users by Total Money

- **Endpoint:** `/:totalMoney`
- **Method:** GET
- **Description:** Filter users based on a specific amount of money.

### Get User by ID

- **Endpoint:** `/id/:id`
- **Method:** GET
- **Description:** Retrieve user details by their unique ID.

### Cash Deposit

- **Endpoint:** `/:id/cashDeposit`
- **Method:** PUT
- **Description:** Deposit cash to a user's account.

### Credit Deposit

- **Endpoint:** `/:id/creditDeposit`
- **Method:** PUT
- **Description:** Deposit credit to a user's account.

### Cash Withdraw

- **Endpoint:** `/:id/cashwithdraw`
- **Method:** PUT
- **Description:** Withdraw cash from a user's account.

### Cash Transfer

- **Endpoint:** `/:id/cashtransffer`
- **Method:** PUT
- **Description:** Transfer cash or credit between users.

### Get Users by Active Status

- **Endpoint:** `/userstatus/:isactive`
- **Method:** GET
- **Description:** Retrieve users based on their active status.

### Delete User

- **Endpoint:** `/deleteuser/:id`
- **Method:** DELETE
- **Description:** Delete a user by their ID.

## Getting Started

1. Clone the repository: `https://github.com/Idan3011/bank-API-react-app`
2. Netlify: `https://aquamarine-heliotrope-4b45ac.netlify.app`