const axios = require('axios')

module.exports = {
  login: async (req, res) => {
    try {
      const { data } = await axios.post(
        'http://localhost:5000/api/v1/auth/login',
        {
          email: req.body.email,
          password: req.body.password
        }
      )

      res.status(201).json({
        status: 'success',
        data: data.data
      })
    }

    catch(err) {
      const response = err.response
      res.status(401).json({
        status: 'fail',
        errors: response.data
      })
    }

  }
}
