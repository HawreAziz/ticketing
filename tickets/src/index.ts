import mongoose from 'mongoose';
import { app } from './app';
import { DatabaseConnectionError, EnvironmentError } from '@hacommon/common';

const PORT = 3001;

const start = async () => {
  if (!process.env.JWT_KEY) {
    throw new Error('JWT_KEY not set');
  }

  if (!process.env.TICKETS_MONGO_URI) {
    throw new EnvironmentError(`MONGO_URI is not set`);
  }

  try {
    await mongoose.connect(process.env.TICKETS_MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true
    });
    console.log('Database connected successfully');
  } catch (error) {
    throw new DatabaseConnectionError();
  }

  app.listen(PORT, () => {
    console.log('Tickets listening on port', PORT);
  });
}

start();
