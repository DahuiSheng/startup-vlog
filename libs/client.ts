import { createClient } from 'microcms-js-sdk'
export const client = createClient({
  serviceDomain: 'startup-vlog',
  apiKey: process.env.API_KEY || '',
})