const express= require('express')
const cors = require('cors')
const mongoose= require('mongoose');

const app = express()
app.use(cors())
app.use(express.json({limit: '25mb'}));

require('./Database/db')

app.use(require('./router/productRouter'))
app.use(require('./router/UserRouter'))
const dotenv = require('dotenv')


dotenv.config({path: './config.env'});
const port =process.env.PORT || 5000 ;

app.get('/', (req, res) => {
    res.send("Hello from the server!");

});


app.listen(port,()=>{
  
    console.log(`app from the backend server on: ${port}`)
})

