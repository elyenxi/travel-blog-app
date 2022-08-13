import 'dotenv/config';
import 'colors';
import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';

const PORT = process.env.PORT || 5000;
const app = express();

app.use(express.json({ limit: '30mb', extended: true }));
app.use(cors());

const server = async (app) => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI);

    console.log(
      `Connected to the database: ${conn.connection.host}`.cyan.underline.bold
    );

    app.listen(
      PORT,
      console.log(`
    🚀 Server is running
    🔉 Listening on port ${PORT}
  `)
    );
  } catch (error) {
    console.log(error.message);
  }
};

server(app);
