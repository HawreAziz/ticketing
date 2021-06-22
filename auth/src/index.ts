import { DatabaseConnectionError } from '@hacommon/common';
import mongoose from 'mongoose';
import { app } from './app';



const start = async () => {
  if (!process.env.JWT_KEY) {
    throw new Error('JWT_KEY is not set');
  }
  try {
    await mongoose.connect("mongodb://mongo-srv:27017/auth", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true
    });
    console.log("Connected to the database");
  } catch (error) {
    throw new DatabaseConnectionError();
  }
  app.listen(3000, () => {
    console.log("Listening on port 3000!");
  });
}

start();
