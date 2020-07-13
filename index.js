const express = require('express');

const app = express();

app.get('/', (get, res) => {

    res.send('hello');

});

app.listen(3000, () => {
    console.log('listening');
});