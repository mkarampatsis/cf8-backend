import User, { IUser } from '../models/user.model'
import Role from '../models/role.model';
import bcrypt from 'bcrypt';
import { Types } from 'mongoose';

const SALT_ROUNDS = 10;

export const findAllUsers = async() => {
  return User.find().lean()
}

export const createUser = async(payload: Partial<IUser>) =>{
  if (payload.password) {
    const hash = await bcrypt.hash(payload.password, SALT_ROUNDS);
    payload.password = hash;
  }
 
  // let roleIds: Types.ObjectId[] = [];
  // let reader = await Role.findOne({role: "READER"});
  // if (!reader) {
  //   reader = await Role.create({role: "Reader", description: "Role Reader", active: true});
  // }
  // roleIds = [reader._id];
  
  // const user = new User({...payload, roles: roleIds})
  const user = new User(payload)
  return user.save();
}