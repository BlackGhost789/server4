const express = require('express');
const axios = require('axios');
const app = express();


let i = 0;
app.get('/loop',async (req, res)=> {
    i++
    console.log(i);
    await axios.get('https://informatique-dz-api.onrender.com/');
    axios.get('https://server2amine.onrender.com/external-api');
        
})



app.get('/init', (req, res)=> {
    console.log('iteratedee')
    setInterval(async () => {
        const response2 = 
        i++
        console.log(i);
        console.log('iterated')
    }, 100000);
})


app.listen(3000, ()=>{
    console.log('server listening')
})
