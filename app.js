import express from 'express';
import {PORT} from './config/env.js'

import userRouter from './routes/user.routes.js';
import subscriptionRouter from './routes/subscription.routes.js';
import authRouter from './routes/auth.routes.js';
import connnectToDatabase from './database/mongodb.js';
import errorMiddleware from './midllewares/error.middleware.js';
import cookieParser from 'cookie-parser';
import arcjetMiddleware from './midllewares/arcjet.middleware.js';
import workflowRouter from './routes/workflow.routes.js';

const app = express();

app.use(express.json());
app.use(express.urlencoded({extented: false}));
app.use(cookieParser())

app.use("/api/v1/auth", authRouter);
app.use("/api/v1/users", userRouter);
app.use("/api/v1/subscriptions", subscriptionRouter);
app.use("/api/v1/workflows", workflowRouter);

app.use(arcjetMiddleware);

//Error handling middleware
app.use(errorMiddleware)

app.get('/', (req, res) => {
    res.send( "Welcome to the subscription tracker API")
});

app.listen( PORT, 'localhost', async () => {
    console.log(`Subscription Tracker API is running on http://localhost:${PORT}`);

    await connnectToDatabase();
})

export default app