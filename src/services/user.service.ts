import User, { IUser } from '../models/user.model'
import Role, { IRole } from '../models/role.model';
import bcrypt from 'bcrypt';
import { AnyObject, ClientSession, Document, DocumentSetOptions, Error, MergeType, Model, ModifiedPathsSnapshot, pathsToSkip, PopulateOptions, Query, QueryOptions, SaveOptions, ToObjectOptions, Types, UpdateQuery, UpdateWithAggregationPipeline } from 'mongoose';

const SALT_ROUNDS = 10;

export const findAllUsers = async() => {
  return User.find().populate('roles').lean()
}

export const findUserById = async(id: string) => {
  return User.findById(id).populate('roles').lean();
}

export const createUser = async(payload: Partial<IUser>) =>{
  if (payload.password) {
    const hash = await bcrypt.hash(payload.password, SALT_ROUNDS);
    payload.password = hash;
  }
 
  // let roleIds: Types.ObjectId[] = [];
  let reader = await Role.findOne({role: "READER"});
  if (!reader) {
    reader = await Role.create({role: "Reader", description: "Role Reader", active: true});
  }
  let roleIds = [reader._id];
  
  const user = new User({...payload, roles: roleIds})
  return user.save();
}

export const updateUser = async(id:string, payload: Partial<IUser>) => {
  if (payload.password) {
    const hash = await bcrypt.hash(payload.password, SALT_ROUNDS);
    payload.password = hash;
  }
  return User.findByIdAndUpdate(id, payload, {new:true}).populate('roles')
}

export const deleteUser = async(id: string) => {
  return User.findByIdAndDelete(id);
}