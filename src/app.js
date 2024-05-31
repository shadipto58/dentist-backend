import cookieParser from "cookie-parser";
import cors from "cors";
import express from "express";

const app = express();

app.use(
  cors({
    origin: process.env.CORS_ORIGIN,
    methods: "GET, POST, DELETE , PATCH , PUT",
    credentials: true,
    optionsSuccessStatus: 200,
  })
);

app.use(express.json({ limit: "20mb" }));
app.use(express.urlencoded({ extended: true, limit: "20mb" }));
app.use(express.static("public"));
app.use(cookieParser());

// All Routes

import userRouter from "./routes/user.routes.js";
import appointmentRouter from "./routes/appointment.routes.js"

// Route Declaration

app.use("/api/users", userRouter);
app.use("/api/appointment", appointmentRouter);



app.get("/", (req, res) => {
  res.send("Welcome to Chaitube");
});

export { app };
