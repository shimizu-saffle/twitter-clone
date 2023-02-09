export const userTransformer = (user) => {
  return {
    id: user.id,
    email: user.email,
    username: user.username,
    profileImage: user.profileImage,
    createdAt: user.createdAt,
    updatedAt: user.updatedAt,
  }
}
