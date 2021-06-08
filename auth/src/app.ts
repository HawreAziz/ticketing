import "express-async-errors";
import { json } from 'body-parser';
import express from 'express';
import { signupUser, signinUser, currentUserRouter, signoutUser } from './routes';
import { errorHandler } from './middlewares';
import { NotFoundError } from './errors';
import cookieSession from 'cookie-session';


const app = express();

app.set('trust proxy', true);
app.use(json());
app.use(cookieSession({
  signed: false,
  secure: process.env.NODE_ENV !== "test",
}));

app.use(currentUserRouter);
app.use(signupUser);
app.use(signinUser);
app.use(signoutUser);

app.all('*', async () => {
  throw new NotFoundError();
});

app.use(errorHandler);


export { app };
