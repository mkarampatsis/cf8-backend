import express from "express";
import morgan from "morgan";

import User from './models/user.model';
import Role from './models/role.model'

const app = express();

app.use(morgan('dev'));

app.get('/users', (req, res)=>{
  res.send("Hello users app");
});

app.post('/users', (req, res)=>{
  res.send("Hello users app");
});

export default app;