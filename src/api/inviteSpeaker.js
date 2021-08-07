import agent from '../structures/agent'

const inviteSpeaker = async (profile, channel, userId) => {
  'use strict'

  const response = await agent('/invite_speaker', {
    body: {
      channel: channel || null,
      user_id: userId
    }
  }, profile)
  const data = await response.json()

  return data
}

export default inviteSpeaker

export const specification = {
  success: Boolean
}
