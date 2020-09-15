const axios = require('axios')

module.exports = {
  index(req, res) {
    res.render('index')
  },

  googlePage(req, res) {
    axios.get('https://jsonplaceholder.typicode.com/todos/1')
      .then(response => {
        res.send(response.data)
      })
  }
}
