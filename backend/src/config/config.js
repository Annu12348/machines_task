import dotenv from 'dotenv'
dotenv.config()

export const config = {
    PORT: process.env.PORT,
    
    MONGODB_URL: process.env.MONGODB_URL,

    JWT_SECRET_KEY: process.env.JWT_SECRET_KEY,

    SMTP_PASS: process.env.SMTP_PASS,
    SMTP_USER: process.env.SMTP_USER,
    EMAIL_USER: process.env.EMAIL_USER
}