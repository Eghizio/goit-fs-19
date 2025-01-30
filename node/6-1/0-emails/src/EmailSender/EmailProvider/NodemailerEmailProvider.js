import nodemailer from "nodemailer";
import { AbstractEmailProvider } from "./AbstractEmailProvider.js";

/* Nodemailer + SendGrid */
export class NodemailerEmailProvider extends AbstractEmailProvider {
  #client;

  constructor(apiKey) {
    super();

    this.#client = nodemailer.createTransport(
      this.#createTransportConfig(apiKey)
    );
  }

  async sendEmail({ from, to, subject, body: { text, html } }) {
    const payload = { from, to, subject, text, html };
    const response = await this.#client.sendMail(payload);
    return response;
  }

  #createTransportConfig(apiKey) {
    return {
      host: "smtp.sendgrid.net",
      port: 465,
      secure: true,
      auth: {
        user: "apikey",
        pass: apiKey,
      },
    };
  }
}
