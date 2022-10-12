const express = require('express');
const app = express();
const port = 3000;
const cors = require('cors');
const bodyParser = require('body-parser');

//middleware
app.use(bodyParser.json());
app.use(express.static('public'));
app.use(cors(
    {
        origin: 'http://localhost:3000'
    }
));


app.get('/', (req, res) => res.send('Hello World!'));


app.listen(port, () => console.log(`Server Running and listening to port ${port}!`));