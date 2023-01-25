import express from 'express';
import mongoDbConn from './config/mongoDbConn.js';
import dotenv from 'dotenv';
import userRouter from './routes/userRoutes.js';
import cors from 'cors';

// MONGODB CONNECTION //
dotenv.config();
mongoDbConn();

// EXPRESS INSTANCE //
const app = express();

// app.use((req, res, next) => {
//   res.setHeader("Access-Control-Allow-Origin", "*");
//   res.setHeader("Access-Control-Allow-Methods", "GET,POST,PUT,PATCH,DELETE");
//   res.setHeader(
//     "Access-Control-Allow-Methods",
//     "Content-Type",
//     "Authorization"
//   );
//   next();
// });

app.use(cors());

// MIDDLEWARES //
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/uploads", express.static("uploads"));

// USE THE ROUTES //
app.use("/", userRouter);

// SERVER CONNECTION //
const PORT = process.env.PORT || 5500;

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
});
