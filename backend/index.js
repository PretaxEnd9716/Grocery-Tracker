const express = require('express')
const app = express()
require('dotenv').config();

const axios = require('axios')
require('dotenv').config()
app.use(express.json())

app.get('/test', function (req, res) {
    var config = {
        method: 'get',
        url: 'https://api.kroger.com/v1/locations/?filter.zipCode.near=77494',
        headers: { 
          'Authorization': 'Bearer ' + process.env.KEY, 
          'Cookie': process.env.COOKIE
        }
      };

    axios(config)
    .then(function (response) {
        res.status(200).json(response.data);
      })
      .catch(function (error) {
        console.log(error);
        res.status(400).json({error:"An error has occurred"})
      });
})

app.get('/location', (req, res)=>{
  let zipCode = req.query.zipCode;
  
  var config = {
    method: 'get',
    url: 'https://api.kroger.com/v1/locations/?filter.zipCode.near=' + zipCode,
    headers: {
      'Authorization': 'Bearer ' + process.env.KEY,
      'Cookie': process.env.COOKIE
    }
  };

  axios(config)
    .then(function (response) {
        res.status(200).json(response.data);
      })
      .catch(function (error) {
        console.log(error);
        res.status(400).json({error:"An error has occurred"})
      });
})

app.listen(3000, () => console.log(`Example app listening at http://localhost:3000`))