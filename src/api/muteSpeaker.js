import agent from '../structures/agent'

const muteSpeaker = async (profile, channel, userId) => {
  'use strict'

  const response = await agent('/mute_speaker', {
    body: {
      channel: channel || null,
      user_id: userId
    }
  }, profile)
  const data = await response.json()

  return data
}

export default muteSpeaker

export const specification = {
  success: Boolean
}
