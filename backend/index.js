const express = require('express')
const app = express()

const axios = require('axios')
require('dotenv').config()

app.get('/test', function (req, res) {
    const key = 'Bearer ' + process.env.API_KEY
    const headers = {headers:{
        'Accept': 'application/json',
        'Authorization': key
    }}
    axios.get('https://api.kroger.com/v1/products?filter.term=milk&filter.limit=2', headers)
    .then(function(response) {
        console.log(response.data)
        res.status(200).json(response.data);
    })
    .catch(function(error) {
        console.log(error)
        res.status(400).json({error:"An error occured"})
    })
})

app.listen(3000, () => console.log(`Example app listening at http://localhost:3000`))