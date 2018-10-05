const express = require('express');
const ejs = require('ejs');
const app = express();


var port = Number(process.env.PORT || 8080);


app.set('view engine', 'ejs');
app.use(express.static('public'));




app.get('/', (req, res) => {

    res.render('pages/index');
       
});

app.get('/orders', (req, res) => {

    res.render('pages/orders');
       
});

app.get('/cart', (req, res) => {

    res.render('pages/cart');
       
});

app.listen(port, () => console.log('Example app is listening on port ' + port))




