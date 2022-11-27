const express = require('express');
const cors = require('cors');
const router = require('./routes/productRouter')
const reviewRouter = require('./routes/reviewRouter')
const bodyparser = require('body-parser')

require('dotenv').config();

const app = express();



const corsOption = {
    origin : "https://localhost/8081"
}



app.use(cors(corsOption));
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended:true}));
app.use('/api/product', router)
app.use('/api/review', reviewRouter)

app.get('/', (req,res) => {
    res.send('welcom to nodejs crud')
});

app.listen(process.env.PORT, ()=>{
    console.log(`server is running on ${process.env.PORT}`)
});