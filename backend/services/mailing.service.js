import NodemailerAdapter from "../Adapters/nodemailer.adapter.js";
import jwt from "jsonwebtoken";
import { appConfig } from "../config/index.js";
import { emailConfig } from "../config/emailConfig/email.config.js";

const { jwt_secret } = appConfig;
const { emailUser } = emailConfig;

export const sendPasswordResetEmail = async (user) => {
  try {
    const { email, first_name, last_name, _id } = user;
    const token = jwt.sign({ id: _id, email: email }, jwt_secret, {
      expiresIn: "1h",
    });

    const resetLink = `http://localhost:5173/reset-password?token=${token}`;
    const subject = "Reset your password";
    const text = `Hi ${first_name} ${last_name}! Please click the link below to reset your password: ${resetLink}`;
    const html = `
            <!DOCTYPE html>
        <html>

        <head>
        <style>
            .email-link {
            color: #4F46E5;
            text-decoration: underline;
            font-size: 16px;
            }

            .email-link:hover {
            color: #6D28D9;
            }

            .email-link:visited {
            color: #9CA3AF;
            }

            .email-body {
            font-family: Arial, sans-serif;
            line-height: 1.5;
            color: #374151;
            }

            .email-container {
            padding: 20px;
            background-color: #F3F4F6;
            }

            .email-title {
            color: #1F2937;
            font-size: 24px;
            font-weight: bold;
            margin-bottom: 10px;
            }

            p {
            color: #4B5563;
            font-size: 16px;
            margin-bottom: 10px;
            }
        </style>
        </head>

        <body>
        <div class="email-container">
            <div class="email-body">
            <div class="email-title">Tutorcity Support</div>
            <p>Hello ${first_name} ${last_name},</p>
            <p>Please click on the following link to reset your password:</p>
            <a href="${resetLink}" class="email-link">Reset Password</a>
            <p>If you did not request a password reset, ignore this email or contact us if you have any questions.</p>
            </div>
        </div>
        </body>

        </html>

    `;

    await NodemailerAdapter.sendEmail(email, emailUser, subject, text, html);
  } catch (error) {
    throw error;
  }
};

export const sendHiringEmail = async (newClientData, service, user) => {
  try {
    const {
      first_name,
      last_name,
      phone_number,
      email,
      meeting_time,
      description,
    } = newClientData;
    const subject = "New client!";
    const text = `Hi ${user.first_name} ${user.last_name}! You have a new client: ${first_name} ${last_name}`;
    const html = `
    
    <!DOCTYPE html>
    <html>

    <head>
    <style>
        .email-link {
        color: #4F46E5;
        text-decoration: underline;
        font-size: 16px;
        }

        .email-link:hover {
        color: #6D28D9;
        }

        .email-link:visited {
        color: #9CA3AF;
        }

        .email-body {
        font-family: Arial, sans-serif;
        line-height: 1.5;
        color: #374151;
        }

        .email-container {
        padding: 20px;
        background-color: #F3F4F6;
        }

        .email-title {
        color: #1F2937;
        font-size: 24px;
        font-weight: bold;
        margin-bottom: 10px;
        }

        .p1 {
        color: #4B5563;
        font-size: 16px;
        margin-bottom: 10px;
        }
        .p2 {
        color: green;
        font-size: 16px;
        margin-bottom: 10px;
        }
    </style>
    </head>

    <body>

    <div class="email-container">
        <div class="email-body">
        <div class="email-title">Tutorcity Hirings</div>
        <p class="p1">Hello ${user.first_name} ${user.last_name},</p>
        <p class="p1">You have a new client on <strong>${service.name}</strong> service</p>
        <p class="p2">First Name: ${first_name}</p>
        <p class="p2">Last Name: ${last_name}</p>
        <p class="p2">Phone Number: ${phone_number}</p>
        <p class="p2">Email: ${email}</p>
        <p class="p2">Meeting Time: ${meeting_time}</p>
        <p class="p2">Description: ${description}</p>
        </div>
    </div>
    </body>

    </html>

    `;
    await NodemailerAdapter.sendEmail(emailUser, email, subject, text, html);
  } catch (error) {
    throw error;
  }
};
