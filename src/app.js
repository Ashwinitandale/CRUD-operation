const express = require('express');
require('./db/conn')
const app = express()
const movie = require('./models/info')
const movieRouter = require('./routers/routs')
const port = process.env.PORT || 3000;

app.use(express.json())
app.use(movieRouter)



app.listen(port, () => {
    console.log(`connection is setup at ${port}`);
})

