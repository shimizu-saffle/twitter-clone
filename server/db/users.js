import bcrypt from 'bcrypt'
import { prisma } from '.'

export const createUser = (userData) => {
  const finalUserData = {
    ...userData,
    password: bcrypt.hashSync(userData.password, 10),
  }
  return prisma.user.create({
    data: finalUserData,
  })
}
