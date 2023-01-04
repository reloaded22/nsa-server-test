import express from 'express';
import mongoDbConn from './config/mongoDbConn.js';
import dotenv from 'dotenv';
import userRouter from './routes/userRoutes.js';

// MONGODB CONNECTION //
dotenv.config();
mongoDbConn();

// EXPRESS INSTANCE //
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("uploads"));

// USE THE ROUTES //
app.use("/", userRouter);

// SERVER CONNECTION //
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
});
