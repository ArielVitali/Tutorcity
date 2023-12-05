# TutorCity - README

TutorCity is an online service platform that allows users to offer and search for tutoring services. Users offering their services can register, authenticate, and manage services and service contracts.

## Installation and Execution

1. Clone this repository: git clone `https://github.com/ArielVitali/TutorCity-Backend`
2. Install dependencies: `npm i`
3. Create a `.env` file with the necessary environment variables.
4. Run the application: `npm run start`
5. Happy hacking!

# Main Features

- **Authentication and Authorization**: Users can register and authenticate.
- **Profile Management**: Authenticated users can view and update their profile, including title and experience.
- **Services**: Authenticated users can create, update, and delete services. Services have attributes such as name, description, category, cost, type, etc.
- **Service Contracts**: Users can create, update, and list service contracts for specific services. Contracts include contact information for those wishing to hire the service and their status. Authenticated users are the ones who can transition this state.
- **Comments**: Users can view and create comments on specific services.

# Environment Variables

In addition to the aforementioned environment variables, make sure to configure the following:

- CLOUDINARY_CLOUD_NAME: Your Cloudinary account name, used for storing images.
- CLOUDINARY_API_KEY: Cloudinary API key for authenticating your requests.
- CLOUDINARY_API_SECRET: Cloudinary API Secret key to ensure security in your requests.
- EMAIL_SERVICE= Email prefered service through Nodemailer.
- EMAIL_PORT= Email port.
- EMAIL_USER= Email real account.
- EMAIL_PASS: Password for sending emails.
- USER_EMAIL: Email address used as the sender in emails sent via SendGrid.
- URI_MONGO: Connection URI to your MongoDB database. Make sure to include your credentials and the database name.
- JWT_SECRET: Secret key used to sign authentication JWT tokens.
- CORS_ORIGIN : Allowed CORS request origin URL, useful in development to allow requests from your local frontend.

_Remember that these variables must be kept secure and should not be shared publicly._

# Technical Aspects

- **Used Technologies**: Node.js, Express.js, MongoDB.
- **Authentication and Security**: JSON Web Tokens with Passport was used to manage authentication and authorization. Passwords were hased before being stored.
- **Data Validation**: Validations are implemented on user-provided data in routes using Express Validator.
- **Error Handling**: There is a handleErrorResponse function to manage consistent error responses. Errors are logged to the console.
- **Middlewares**: Middlewares are used to verify access and refresh tokens, and to validate data in routes.
- **Models and Schemas**: Mongoose models and schemas are defined for users, services, service contracts, and comments.
- **Routes, Controllers, and Services**: Routes are organized into different files corresponding to specific system functionalities.
- **Environment Configuration**: A .env file is used to store environment variables, such as secret keys and database configurations.
