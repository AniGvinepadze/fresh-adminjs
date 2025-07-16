import nodemailer, { SendMailOptions, SentMessageInfo } from 'nodemailer';
import * as dotenv from 'dotenv';

dotenv.config();

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

interface EmailDetails {
  to: string;
  subject: string;
  restaurant: string;
  date: string;
  guests: number;
  userName: string;
}

const sendEmail = async ({
  to,
  subject,
  restaurant,
  date,
  guests,
  userName,
}: EmailDetails): Promise<{ success: boolean; info?: SentMessageInfo; error?: Error }> => {
  const mailOptions: SendMailOptions = {
    to,
    from: 'Pabellón <info@pabellón.ge>',
    subject,
    html: `
      <table cellpadding="0" cellspacing="0" width="100%" ">
        <tr>
          <td align="center" style="padding: 40px 0;">
            <table cellpadding="0" cellspacing="0" width="600" style="background-color:#EBE5DA; border-radius:8px; box-shadow:0 2px 6px rgba(0,0,0,0.1); overflow:hidden;">
              <!-- Header -->
              <tr>
                <td align="center" style="background-color:#37292B; padding:20px 0;">
                  <h1 style="margin:0; color:#ffffff; text-decoration:italic">Restaurant Reservation</h1>
                </td>
              </tr>

              <!-- Body -->
              <tr>
                <td style="padding:30px;">
                  <p style="margin:0 0 15px 0; font-size:16px; color:#333333;">
                    Greetings <strong>${userName}</strong>,
                  </p>
                  <p style="margin:0 0 15px 0; font-size:16px; color:#333333;">
                    Reservation Details:
                    <ul>
                      <li>Date: <strong>${date}</strong></li>
                      <li>Guests: <strong>${guests}</strong></li>
                    </ul>
                  </p>
                  <p style="margin:0 0 25px 0; font-size:16px; color:#333333;">
                    Thank you for choosing our restaurant! We look forward to your visit at <strong>${restaurant}</strong>.
                  </p>
                </td>
              </tr>

             
              <!-- Footer -->
              <tr>
                <td align="center" style="padding:20px; font-size:14px; color:#888888;">
                  <p style="margin:0;">&copy; 2025 Pabellón Restaurant. All rights reserved.</p>
                  <p style="margin:5px 0 0 0;">
                    <a href="https://example.com/unsubscribe" style="color:#888888; text-decoration:underline;">Unsubscribe</a>
                  </p>
                </td>
              </tr>
            </table>
          </td>
        </tr>
      </table>
    `,
  };

  try {
    const info = await transporter.sendMail(mailOptions);
    console.log('Email sent:', info.response);
    return { success: true, info };
  } catch (error) {
    console.error('Error sending email:', error);
    return { success: false, error };
  }
};

export default sendEmail;
