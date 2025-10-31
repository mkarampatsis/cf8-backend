import User from '../models/user.model';
import { AuthPayload } from '../models/auth.model';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
dotenv.config()

const JWT_SECRET = process.env.JWT_SECRET || '';

export const login = async(username:string, password:string) => {
  const user = await User.findOne({username}).populate('roles');
  if (!user) return null;

  const match = await bcrypt.compare(password, user.password);
  if (!match) return null;

  const payload: AuthPayload = {
    username: user.username,
    email: user.email || '',
    roles: user.roles
  }

  const token = jwt.sign(payload as any, JWT_SECRET, {expiresIn: '1h'} );
  console.log(token);
  return {user, token}
}