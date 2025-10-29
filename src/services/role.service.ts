import Role, { IRole } from '../models/role.model';

export const findAllRoles = async() => {
  return Role.find().lean();
}

export const createRole = async(payload: Partial<IRole>) => {
  const result = new Role(payload);
  return result.save();
}

export const updateRole = async(id:string, payload: Partial<IRole>) => {
  return Role.findByIdAndUpdate(id, payload, {new: true});
}

export const deleteRole = async(id:string) =>{
  return Role.findByIdAndDelete(id);
}