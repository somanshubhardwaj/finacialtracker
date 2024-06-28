# Finance Tracker App

## Overview

The Finance Tracker App is a web application built with Next.js, a React framework for server-side rendering. It allows users to track their financial transactions and manage their expenses.

### Features

1. User Registration and Login: Users can create an account and log in to access their personal finance dashboard.
2. Dashboard: Users can view an overview of their  expenses.

### Installation

To run the Finance Tracker App locally, follow these steps:

1. Clone the repository:

    ```bash
    git clone https://github.com/somanshubhardwaj/finance-tracker-app.git
    ```

2. Install dependencies:

    ```bash
    cd finance-tracker-app
    npm install
    ```

3. Configure environment variables:
    - Create a `.env` file in the root directory.
    - Add the necessary environment variables, such as database connection details and API keys.

    ```js
        MONGODB=mongodburl
        GOOGLE_CLIENT_ID=googlecientid
        GOOGLE_CLIENT_SECRET=googlesecret
        NEXTAUTH_URL=nextauthurl
        NEXTAUTH_SECRET=secret
    ```

4. Start the development server:

    ```bash
    npm run dev
    ```

5. Open [http://localhost:3000](http://localhost:3000) in your browser to access the app.





### Usage

Once the app is running, you can perform the following actions:

- Register a new account or log in with existing credentials.
- Add transactions

### Contributing

Contributions to the Finance Tracker App are welcome! If you'd like to contribute, please follow these guidelines:

1. Fork the repository and create a new branch for your feature or bug fix.
2. Make your changes and ensure that the code passes all tests.
3. Submit a pull request describing your changes and the problem they solve.

### License

The Finance Tracker App is open source and released under the [MIT License](https://opensource.org/licenses/MIT).

###### This project failed to deploy on vercel but is perfectly working on azure cloud service
