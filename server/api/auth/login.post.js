import bcrypt from 'bcrypt'
import { readBody, sendError } from 'h3'
import { createRefreshToken } from '~~/server/db/refreshTokens.js'
import { userTransformer } from '~~/server/transformers/user.js'
import { getUserByUsername } from '../../db/users.js'
import { generateTokens, sendRefreshToken } from '../../utils/jwt.js'

export default defineEventHandler(async (event) => {
  const body = await readBody(event)

  const { username, password } = body

  if (!username || !password) {
    return sendError(
      event,
      createError({
        statusCode: 400,
        statusMessage: 'Username or password is invalid',
      })
    )
  }

  const user = await getUserByUsername(username)

  if (!user) {
    return sendError(
      event,
      createError({
        statusCode: 400,
        statusMessage: 'Username or password invalid',
      })
    )
  }

  const doesThePasswordMatch = await bcrypt.compare(password, user.password)

  if (!doesThePasswordMatch) {
    return sendError(
      event,
      createError({
        statusCode: 400,
        statusMessage: 'Username or password invalid',
      })
    )
  }

  const { accessToken, refreshToken } = generateTokens(user)

  await createRefreshToken({
    token: refreshToken,
    userId: user.id,
  })

  sendRefreshToken(event, refreshToken)

  return {
    access_token: accessToken,
    user: userTransformer(user),
  }
})
