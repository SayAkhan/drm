const express = require('express')
const app = express()
const port = 3000

app.use(express.static("static"));

app.set('views','./views');
app.set('view engine','ejs');

app.get('/', (req, res) => {
  res.render('shaka');

})

app.listen(port, () => {
  console.log(`running server.... ${port}`)
})