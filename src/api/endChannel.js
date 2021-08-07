import agent from '../structures/agent'

const endChannel = async (profile, channel, channelId) => {
  'use strict'

  const response = await agent('/end_channel', {
    body: {
      channel: channel || null,
      channel_id: channelId
    }
  }, profile)
  const data = await response.json()

  return data
}

export default endChannel

export const specification = {
  success: Boolean
}
