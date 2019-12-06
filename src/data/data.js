const axios = require('axios')

async function sendMeal (json) {
  axios.post('http://webhook.site/b7824db7-d4f3-4d59-973b-392589eec298', json, {
    headers: {
      'Content-Type': 'application/json'
    }
  }).then(response => {
    console.log(response)
  })
    .catch(error => {
      console.log(error)
    })
}

export default sendMeal
