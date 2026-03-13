import dotenv from 'dotenv';
dotenv.config();

export const config = {
  PORT: process.env.PORT,

  MONGODB_URL: process.env.MONGODB_URL,

  JWT_SECRET_KEY: process.env.JWT_SECRET_KEY,

  SMTP_PASS: process.env.SMTP_PASS,
  SMTP_USER: process.env.SMTP_USER,
  EMAIL_USER: process.env.EMAIL_USER,

  GOOGLE_CLIENT_ID: process.env.GOOGLE_CLIENT_ID,
  GOOGLE_CLIENT_SECRET: process.env.GOOGLE_CLIENT_SECRET,

  // This MUST exactly match one of the "Authorized redirect URIs" in
  // your Google Cloud OAuth client configuration.
  GOOGLE_CALLBACK_URL: process.env.GOOGLE_CALLBACK_URL,

  // Frontend base URL; keep configurable for local and production.
  FRONTEND_URL: process.env.FRONTEND_URL || 'http://localhost:5173'
};