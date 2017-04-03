const express = require('express');
const hbs = require('hbs');

var app = express();

hbs.registerPartials(__dirname + '/views/partials');
app.set('view engine','hbs');

hbs.registerHelper('getCurrentYear',()=>{
  return new Date().getFullYear();
});

app.use((req,res,next) => {

  console.log(Date().toString() + ": ", req.method,req.path );
  next()
});

app.use((req,res,next) => {
  res.render('maintenance.hbs');
});

app.use(express.static(__dirname + "/public"));
app.get('/',(req,res)=>{
  // res.send("<h1>Hello World</h1>");
  // res.send({
  //   Name:'Sriram',
  //   hobby:'Music'
  // });
  res.render('home.hbs',{
    pageTitle:'New Home Title',
    welcomeMessage:'Welcome to the new Home Page',
  })
});

app.get('/about',(req,res)=>{
  // res.send('<h1>This is About Page</h1>');
  res.render('about.hbs',{
    pageTitle:'New About Title',
  });
});

app.get('/bad',(req,res)=>{
  res.send({
    Error:"This is a bad request",
    errCodes:[
              "404",
              "500"
    ]
  });
});
app.listen(3000,()=>{
  console.log("Server is up on port 3000");
});
