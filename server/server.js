const express = require('express');
const path = require('path');
const port = 3000;
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const apiRouter = require('./routes/api');

const app = express();


app.use(express.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(path.resolve(__dirname, '../images')));
app.use(cookieParser());


app.use('/api', apiRouter);

app.get('/',
  (req, res) => {
  return res.status(200).sendFile(path.resolve(__dirname, '../public/index.html'));
})



module.exports = app.listen(port, () => console.log(`Listening on port ${port}`));
