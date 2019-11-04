const renderer = require('vue-server-renderer').createRenderer()
const {app} = require('./app.js')


renderer.renderToString(app)
  .then(console.log)
  .catch(console.error)
