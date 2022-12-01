require("dotenv").config();
const express = require('express');
const app = express();
const PORT = process.env.PORT;

app.get('/dburl', (request, response) => {
    response.send(`hello world i am listening to port ${PORT}`);
});

app.listen(PORT, () => {
    console.log(`✅ PORT: ${PORT} 🌟`)
});


app.get('/', (request, response) => {
    response.send(`hello world i am listening to port ${PORT}`);
});
