import agent from '../structures/agent'

const makeModerator = async (profile, channel, userId) => {
  'use strict'

  const response = await agent('/make_moderator', {
    body: {
      channel: channel || null,
      user_id: userId
    }
  }, profile)
  const data = await response.json()

  return data
}

export default makeModerator

export const specification = {
  success: Boolean
}
