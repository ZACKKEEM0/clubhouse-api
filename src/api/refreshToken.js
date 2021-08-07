import agent from '../structures/agent.js'

const refreshToken = async (profile, refreshToken) => {
  'use strict'

  const response = await agent('/refresh_token', {
    body: {
      refresh: refreshToken
    }
  }, profile)
  const data = await response.json()

  return data
}

export default refreshToken

export const specification = {
  success: Boolean,
  is_blocked: Boolean,
  error_message: String
}
