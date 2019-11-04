const fs = require('fs').promises
const server = require('express')()
const {createRenderer} = require('vue-server-renderer')
const {app} = require('./app.js')

fs.readFile('./template.html', 'utf-8')
  .then((template) => {

    const renderer = createRenderer({template})

    server.get('*', (req, res) => {
      renderer.renderToString(app)
        .then((html) => res.end(html))
        .catch(() => res.status(500).end('Internal Server Error'))
    })

    server.listen(8080)
    console.log('server started at http://localhost:8080')

  })
  .catch(() => console.error('Could not find template.'))

