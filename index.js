const express = require('express');

const app = express();

app.get('/',(req,res) =>{
    res.send("Thank you for calling me...Know how to open node");
})

app.listen(3000,() => console.log('Listenting to port 3000'));