import toppings from './toppings'

export default {
  redisURL: 'redis://localhost:6379/0',
  channel: {
    ttl: 60 * 60, // 1 hour
  },
  bodyKeys: {
    uploaderPeerID: {
      min: 3,
      max: 256,
    },
    slug: {
      min: 3,
      max: 256,
    },
  },
  shortSlug: {
    numChars: 4,
    chars: '0123456789',
    maxAttempts: 20,
  },
  longSlug: {
    numWords: 1,
    words: toppings,
    maxAttempts: 20,
  },
}
