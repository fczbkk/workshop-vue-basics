const Vue = require('vue')

const app = new Vue({
  template: '<div>{{ greeting }} World</div>',
  data () {
    return {
      greeting: 'Hello'
    }
  }
})

module.exports = {
  app
}
