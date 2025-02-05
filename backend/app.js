import express from "express";
import morgan from "morgan";
import helmet from "helmet";
import cors from "cors";
import {rateLimit} from 'express-rate-limit';
import mongoSanitize from "express-mongo-sanitize";
import xss from 'xss-clean';
import cookieParser from "cookie-parser";
const app = express();

import userRoutes from './routes/userRoutes.js';
import authRoutes from './routes/authRoutes.js';
import { globalErrorHandler } from "./controllers/error.controller.js";
import AppError from "./utils/appError.js";
// import AppError from "./utils/appError.js";
// import {globalErrorHandler} from "./controllers/errorController.js"



// middleware stacks 

// Body parser, reading data from body into req.body
app.use(express.json({ limit : '50kb'}));
app.use(express.urlencoded({extended: true}));
app.use(cookieParser());

// Data sanitization against NoSql queries - it should always be done after above middleware , when we get data 
app.use(mongoSanitize());  // it prevents from $gt sign or other technique of injection

// Data sanitization against XSS attacks
app.use(xss())  // it prevents from malicious html code 

app.use(express.static(`../frontend/index.html`));  // for serving static files

app.use(cors({ origin: process.env.FRONTEND_URL , credentials: true}));        // enable secure cross-origin requests between web applications
app.use(helmet());      // Set security HTTP headers
if(process.env.NODE_ENV === 'development'){
    app.use(morgan('dev'));
}
app.use(morgan('dev'));  // for test only 

// Limit requests from same API
const limiter = rateLimit({
    max : 100,
    windowMs: 60 * 60 * 1000,
    message: 'Too many requests from this IP, Please try again in an hour'
})

// app.use('/api', (req, res, next)=>{
//     res.status(200).json({message: 'Hello from the middleware'});
//     next();
// })

 
app.use('/api/v1/users', userRoutes)
app.use('/api/v1/auth',limiter, authRoutes)

app.all('*', (req, res, next)=>{
    next(new AppError(`Can't find ${req.originalUrl} on the server!`));
})

//Error handlling middleware
app.use(globalErrorHandler);

export default app;