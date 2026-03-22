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

  GOOGLE_CALLBACK_URL: process.env.NODE_ENV === "production"
    ? process.env.GOOGLE_CALLBACK_LIVE_URL
    : process.env.GOOGLE_CALLBACK_URL,
  GOOGLE_LOGIN_CALLBACK_URL: process.env.NODE_ENV === "production"
    ? process.env.GOOGLE_LOGIN_CALLBACK_LIVE_URL
    : process.env.GOOGLE_LOGIN_CALLBACK_URL,

  FRONTEND_URL: process.env.NODE_ENV === "production"
    ? process.env.FRONTEND_LIVE_URL
    : process.env.FRONTEND_URL,
};

//1:00 to 