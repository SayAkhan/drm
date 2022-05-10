const express = require('express')
const http = require('http'); 
const https = require('https'); 
const fs = require('fs');
const options = { 
    key: fs.readFileSync('./rootca.key'), cert: fs.readFileSync('./rootca.crt') 
};

https=https.createServer(options,app).listen(3000);
const app = express();
const port = 3000;

app.use(express.static("static"));

app.set('views','./views');
app.set('view engine','ejs');

app.get('/', (req, res) => {
  res.render('shaka');

})

app.listen(port, () => {
  console.log(`running server.... ${port}`)
})