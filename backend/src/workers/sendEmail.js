import nodemailer from "nodemailer";
import { config } from "../config/config.js";

// ✅ Transporter
const transporter = nodemailer.createTransport({
  host: "smtp-relay.brevo.com",
  port: 2525,
  secure: false,
  auth: {
    user: config.SMTP_USER,
    pass: config.SMTP_PASS,
  },
});

// ✅ Verify SMTP connection (server start pe call karo)
export const verifyMailConnection = async () => {
  try {
    await transporter.verify();
  } catch (error) {
    console.error("❌ Brevo SMTP Error:", error.message);
  }
};

// ✅ Common mail sender
const sendMail = async ({ to, subject, html, text }) => {
  try {
    const info = await transporter.sendMail({
      from: config.EMAIL_USER,
      to,
      subject,
      text,
      html,
    });

    return true;
  } catch (error) {
    console.error("❌ Mail send error:", error.message);
    return false;
  }
};



// ==============================
// 🔐 PASSWORD RESET OTP
// ==============================
export const sendOtpMail = async (to, otp) => {
  return await sendMail({
    to,
    subject: "Your management employee and task (Admin) Password Reset OTP",
    text: `Your OTP is ${otp}. It will expire in 5 minutes.`,
    html: `
      <h2>Password Reset OTP</h2>
      <p>Your OTP is:</p>
      <h1>${otp}</h1>
      <p>This OTP will expire in <b>5 minutes</b>.</p>
    `,
  });
};
