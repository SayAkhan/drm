const express = require('express')
const http = require('http'); 
const https = require('https'); 
const fs = require('fs');

const app = express();

port=443;

app.use(express.static("static"));

app.set('views','./views');
app.set('view engine','ejs');

app.get('/', (req, res) => {
  res.render('shaka');

})


const options = { 
    key: fs.readFileSync('./rootca.key'), cert: fs.readFileSync('./rootca.crt') 
};

https.createServer(options, app).listen(443);

app.listen(port, () => {
  console.log(`running server.... ${port}`)
})

