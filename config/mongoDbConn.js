import mongoose from "mongoose";

mongoose.set("strictQuery", false);

const mongoDbConn = () => {
    try {
        mongoose.connect(process.env.MONGO_URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        })
        console.log("Successfully connected to MongoDB");
    } catch (error) {
        console.error(`Error: ${error.message}`);
        process.exit(1);
    }
}

export default mongoDbConn;