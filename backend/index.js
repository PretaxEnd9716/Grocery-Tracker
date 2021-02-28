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
        let unfiltered = response.data;
        let size = unfiltered.data.length;
        
        let arr = [];
        for(var i = 0; i < size; i++)
        {
          let locationID = unfiltered.data[i].locationId;
          let address = unfiltered.data[i].address;
          let location = {'locationId' : locationID, 'address' : address};
          arr.push(location);
        }
        let filteredData = {'data': arr};
        res.status(200).json(filteredData);
      })
      .catch(function (error) {
        console.log(error);
        res.status(400).json({error:"An error has occurred"})
      });
})

app.get('/items', (req, res)=>{
  let item = req.query.item;
  let locations = req.body;
  
  for(var i = 0; i < locations.data.length; i++)
  {
    var config = 
    {
      method: 'get',
      url: 'https://api.kroger.com/v1/products?filter.term=' + item + '&filter.locationId=' + locations.data[i].locationId + '&filter.limit=1',
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
  }
})

app.listen(3000,()=>{
  console.log('API is up and running')
})