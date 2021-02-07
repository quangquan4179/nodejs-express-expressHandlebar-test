const express = require('express');
const handlebars  = require('express-handlebars');
const path=require('path');
const morgan=require('morgan');
const { extname } = require('path');
const app = express();
const port = 3000;
app.use(express.static(path.join(__dirname,'public')));
app.use(express.urlencoded({
  extended:true
}))
app.use(express.json);
app.use(morgan('combined'))
app.engine('hbs', handlebars({
  extname:'.hbs'
}
));
app.set('view engine', 'hbs');

app.set('views',path.join(__dirname,'resources/views'));
console.log(__dirname)
app.get('/', (req, res) => {
   res.render('home');
})
app.get('/new',(req,res)=>{
  res.render('news');
})
app.get('/search',(req,res)=>{
  res.render('search');
})
app.post('/search',(req,res)=>{
  console.log(req.body)
  res.send('');
})
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})