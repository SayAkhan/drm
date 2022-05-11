const express = require('express')
const http = require('http'); 
const https = require('https'); 
const fs = require('fs');

const app = express();

port=3000;

app.use(express.static("static"));

app.set('views','./views');
app.set('view engine','ejs');



const options = { 
    key: fs.readFileSync('./key.pem'), 
    cert: fs.readFileSync('./cert.pem') 
};

//https.createServer(options, app).listen(3000);

app.get('/', (req, res) => {
    res.render('shaka');
  
  })

app.listen(port, () => {
  console.log(`running server.... ${port}`);
})

