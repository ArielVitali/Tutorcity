import { emailConfig } from "../config/emailConfig/email.config.js";
import { transport } from "../Utils/email/email.utils.js";

const { emailUser } = emailConfig;

class NodemailerAdapter {
  constructor() {}

  async sendEmail(email, subject, text, html) {
    try {
      const mailOptions = {
        from: emailUser,
        to: email,
        subject: subject,
        text: text,
        html: html,
      };

      await transport.sendMail(mailOptions);
      return "Email sent successfully";
    } catch (error) {
      throw error;
    }
  }
}

export default new NodemailerAdapter();
