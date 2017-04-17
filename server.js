const express = require('express');
const hbs = require('hbs');
const port = process.env.PORT || 3000;

var app = express();

hbs.registerPartials(__dirname+ '/views/partials');
app.set('view engine','hbs');
app.use(express.static(__dirname+ '/public'));

app.get('/',(req, res)=> {
  res.render('home.hbs',{
    pageTitle: 'Home Page',
    currentYear: new Date().getFullYear(),
    welcomeMessage: 'You have finally arrived!.'
  });
  // res.send('<h1>Hello, this is Express!</h1>');
  // res.send({
  //   name: 'Maly',
  //   likes: [
  //     'Cricket','Gym','Mangoes'
  //   ]
  // });
});

hbs.registerHelper('getCurrentYear', () => {

    return  new Date().getFullYear();
    //

})

app.get('/about', (req, res) => {
  res.render('about.hbs',{
    pageTitle: 'About Page',
    currentYear: new Date().getFullYear()
  });
} );

app.get('/bad', (req, res) => {
  res.send({
    Error: "Unable to process request"
  });
} );


app.listen(port, () => {
  console.log(`Server is up and running at port ${port}`);
});
