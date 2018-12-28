const app = require('../server')
const spawn = require('cross-spawn')

const PORT = process.env.PORT || 8080 // #A

const server = app.listen(PORT, () => {
  // #B
  const opts = ['--config', 'e2e/nightwatch.conf.js', '--env', 'chrome,firefox']
  const runner = spawn('./node_modules/.bin/nightwatch', opts, {
    stdio: 'inherit'
  }) // #C

  runner.on('exit', function(code) {
    // #D
    server.close()
    process.exit(code)
  })

  runner.on('error', function(err) {
    // #E
    server.close()
    throw err
  })
})
