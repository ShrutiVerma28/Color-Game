const express= require('express');
const app= express();

app.use(express.static('public'));

app.get('/',function(req,res){
     res.sendFile(__dirname + '/colorGame.html')
})


app.listen(process.env.port || 3000, function(){
    console.log('The server has started...');
})