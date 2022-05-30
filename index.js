const express = require('express'),
     http = require('http');
     const morgan = require('morgan');
     const bodyParser = require('body-parser');

const hostname = 'localhost';
const port = 5000;
const app = express();


const dishRouter = require('./routes/dishRouter');
const leaderRouter = require('./routes/leaderRouter');
const promoRouter = require('./routes/promoRouter');



app.use(morgan('dev'));
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.json());




app.use('/dishes', dishRouter);
app.use('/leaders', leaderRouter);
app.use('/promotions', promoRouter);



const server = http.createServer(app);

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});