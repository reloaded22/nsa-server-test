import userControllers from '../controllers/userControllers.js';
import { Router } from 'express';
import upload from '../middlewares/upload.js';
const userRouter = Router();

// IMPORT THE "upload" MIDDLEWARE //

userRouter.get("/", userControllers.read)
userRouter.get("/test", userControllers.test) 
userRouter.post("/", upload.single("avatar"), userControllers.create)
userRouter.get("/drop-collection", userControllers.dropCollection)

export default userRouter;

