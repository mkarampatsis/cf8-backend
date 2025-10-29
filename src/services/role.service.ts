import Role from '../models/role.model';

export const findAllRoles = async() => {
  return Role.find().lean();
}