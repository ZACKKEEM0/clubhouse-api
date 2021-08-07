import agent from '../structures/agent'

const followClub = async (profile, opts) => { // NOTE: opts = Number | Object;
  'use strict'

  if (typeof opts === 'number') {
    opts = {
      clubId: opts
    }
  }

  opts = opts || {}

  const response = await agent(
    '/follow_club',
    {
      body: {
        club_id: opts.clubId || -1,
        source_topic_id: opts.sourceTopicId || null
      }
    },
    profile
  )
  const data = await response.json()

  return data
}

export default followClub

export const specification = {
  success: Boolean
}
