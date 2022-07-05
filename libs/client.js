import { createClient } from 'microcms-js-sdk'

export const client = createClient({
  serviceDomain: 'cembalo-blog',
  apiKey: process.env.API_KEY
})