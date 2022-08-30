import 'dotenv/config';
import 'colors';
import cors from 'cors';
import express from 'express';
import mongoose from 'mongoose';
import postRoutes from './routes/postRouter.js';

const PORT = process.env.PORT || 5000;
const app = express();

app.use(express.json({ limit: '30mb', extended: true }));
app.use(express.urlencoded({ limit: '30mb', extended: true }));
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
    📭 Local: http://localhost:${PORT}/posts
  `)
    );
  } catch (error) {
    console.log(error.message);
  }
};

app.use('/posts', postRoutes);

server(app);
