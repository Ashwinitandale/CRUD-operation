const mongoose = require('mongoose')
mongoose.connect("mongodb://localhost:27017/movies-data", {
    useCreateIndex: true,
    useNewurlParer: true,
    useUnifiedTopology: true,
    useFindAndModify:false
}).then(() => {
    console.log("connection is successful");
}).catch((e) => {
    console.log("no connection");
})