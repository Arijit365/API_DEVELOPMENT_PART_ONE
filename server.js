const express = require('express');
const request = require('request-promise');
var fs = require('fs');

const app = express();


app.use(express.json());
app.get('/getusers', (req , res) => {
       fs.readFile(__dirname + '/' + 'users.json' , 'utf8' , function(err , data){
               console.log(data);
               res.end(data);
       })
        res.send('This is a simple API ');
});
var server = app.listen(8000, function(){
        var host = server.address().address
        var port = server.address().port
        console.log("REST API demo working on http://%s:%s" , host , port)
})
