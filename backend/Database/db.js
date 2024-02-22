
var mongoose = require('mongoose');

mongoose.set('strictQuery',false)
var mongoDBURL = ' Your data_base Name ';

mongoose.connect(mongoDBURL,).then (()=>{
    console.log('Connection Established to dataBase')

}).catch (err =>console.log(err) );





