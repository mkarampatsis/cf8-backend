import { connectDB } from './utils/db'
import app from './app';

const port = process.env.PORT || 3000;

const start = async() => {
  await connectDB();
  app.listen(port, ()=>{
    console.log("Server is up on: ", port);
  })
}

start();