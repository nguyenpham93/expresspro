const express = require('express');
const app = express();
const action = require('./router');

action(app);

app.listen(5000,()=>{
    console.log("Web sever listen port 5000");
});
