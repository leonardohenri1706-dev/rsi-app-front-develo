import type SMTPTransport from "nodemailer/lib/smtp-transport";
import nodemailer from "nodemailer";

const {
  SMTP_SERVICE: service = "",
  SMTP_PASSWORD: pass = "",
  SMTP_MAIL: user = "",
} = process.env;

const smtpConfig: SMTPTransport.Options = {
  service,
  auth: { user, pass },
};

export class SendMailService {
  private transporter = nodemailer.createTransport(smtpConfig);

  public async sendMail(
    to: string,
    subject: string,
    html: string
  ): Promise<void> {
    await this.transporter.sendMail({ from: user, to, subject, html });
  }
}
