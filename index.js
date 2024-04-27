const express = require('express');

const app = express();

app.get('/home', (req,res)=>{
    res.json({message: "OKK"});
});

app.listen(5000, ()=>{
    console.log("Started the server");
})
