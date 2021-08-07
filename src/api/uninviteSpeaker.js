import agent from '../structures/agent'

const uninviteSpeaker = async (profile, channel, userId) => {
  'use strict'

  const response = await agent('/uninvite_speaker', {
    body: {
      channel: channel || null,
      user_id: userId
    }
  }, profile)
  const data = await response.json()

  return data
}

export default uninviteSpeaker

export const specification = {
  success: Boolean
}
