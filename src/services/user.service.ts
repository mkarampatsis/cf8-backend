import User from '../models/user.model'

export const findAllUsers = async() => {
  return User.find().lean()
}