const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();
app.use(cors());
app.use(bodyParser.json());
const users =["Asad", "Moin",'Sabed','Jabed','Lota','Pata'];

app.get('/',(req,res) =>{
    const fruit ={
        product : 'ada',
        price :220
    }
    res.send(fruit);
});
app.get('/fruits/banana',(req,res) =>{
    res.send({fruit :'banana', quantity:1000,price:10000});
})

app.get('/users/:id', (req,res) =>{

    const userId = req.params.id;
    const name = users[userId];
    res.send({userId,name});

})

//post
app.post('/addUser' ,(req,res) =>{
    //save to database
    const user = req.body;
    user.id = 55;
   res.send(user);
})

app.listen(4200,() => console.log('Listenting to port 4200'));