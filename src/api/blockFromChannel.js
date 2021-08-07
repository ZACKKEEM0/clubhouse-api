import agent from '../structures/agent'

const blockFromChannel = async (profile, channel, userId) => {
  'use strict'

  const response = await agent('/block_from_channel', {
    body: {
      channel: channel || null,
      user_id: userId
    }
  }, profile)
  const data = await response.json()

  return data
}

export default blockFromChannel

export const specification = {
  success: Boolean
}
