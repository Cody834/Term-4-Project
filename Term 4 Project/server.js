const express = require('express');
const mongoose = require('mongoose');
const app = express();
const ejs = require('ejs');

app.set('view engine', 'ejs');

mongoose.connect('mongodb+srv://cody:kigo@cluster0.ilxoh.mongodb.net/ksFoodsDb?retryWrites=true&w=majority')

const foodsSchema = {
  Name:String , 
  Stock:String ,
  Price:String
}

const Foods = mongoose.model('Foods', foodsSchema);

app.get('/', (req, res) => {
  Foods.find({}, function(err,foods){
    res.render('index.ejs',{
      foodsList:foods
    });
  })
})


app.listen(4000, function () {
    console.log('server is running');
})

