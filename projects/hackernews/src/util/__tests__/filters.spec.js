import { host, timeAgo } from '../filters'

describe('host', () => {
  test('returns empty string if url is undefined')

  test('returns the host from a URL beginning with http://')

  test('returns the host from a URL beginning with https://')

  test('removes path from URL')

  test('removes www from URL')

  test('keep the subdomain')

  test('returns one subdomain and removes others')
})

describe('timeAgo', () => {
  Date.now = () => new Date('2018')
  const unixTime = Date.now() / 1000

  const seconds = second => second * 1
  const minutes = minute => minute * seconds(60)
  const hours = hour => hour * minutes(60)
  const days = day => day * hours(24)

  test('returns singular minute')

  test('returns plural minutes')

  test('returns singular hour')

  test('returns plural hours')

  test('returns singular day')

  test('returns plural days')

  test('returns day rounded to nearest value')
})
