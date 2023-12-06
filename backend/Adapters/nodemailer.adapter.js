import { transport } from "../Utils/email/email.utils.js";

class NodemailerAdapter {
  constructor() {}

  async sendEmail(recieverEmail, senderEmail, subject, text, html) {
    try {
      const mailOptions = {
        from: senderEmail,
        to: recieverEmail,
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
