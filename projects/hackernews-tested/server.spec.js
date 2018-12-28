import request from 'SuperTest'
import app from './server'

describe('server', () => {
  test('/top returns 200', () => {
    return request(app) // #A
      .get('/top') // #B
      .expect(200) // #C
  })

  test('returns a 404 when page does not exist', () => {
    return request(app)
      .get('/does-not-exist') // #A
      .expect(404) // #B
  })
})
