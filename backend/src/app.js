import express from 'express';
import cors from "cors"
import cookieParser from "cookie-parser"
import employeeRoutes from '../src/routes/employee.routes.js'
import adminRoutes from "../src/routes/admin.route.js"
import taskRoutes from "../src/routes/task.routes.js"

const app = express();

app.use(cors({
    origin: "https://machines-task.vercel.app",
    credentials: true
}))
app.use(cookieParser())
app.use(express.json())

app.use("/api/admin", adminRoutes);
app.use("/api/admin/employee", employeeRoutes);
app.use("/api/admin/task", taskRoutes);

export default app;