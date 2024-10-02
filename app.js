import express from 'express';
import { config } from 'dotenv';
import connectDB from "./db/index.js";
config();
import productRouter from "./routes/productRouter.js";

const app = express();
const port = process.env.PORT || 3000;
app.use(express.json());
connectDB();
app.use('/api', productRouter);

app.listen(PORT => {
    console.log(`Server is running ${port}`);
})

