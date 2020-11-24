var express = require('express');
var app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const petsRoutes = require('./routes');

app.use((req, res, next) => {
    console.log(`Request received: ${req.method} ${req.path}`)
    next();
})


app.use('/api/owners', petsRoutes);

app.get('*', (req, res) => {
    res.status(404).send('Not found');
})



app.listen(3000, function() {
    console.log('Pets API is now listening on port localhost:3000...');
})