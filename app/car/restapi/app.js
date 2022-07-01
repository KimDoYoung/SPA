// const express = require('express');
// const cors = require('cors');

import express from 'express';
import cors from 'cors';
import config from './config.js';
import carRouter from './router/car-router.js';

const app = express();
const port = 3000;
app.use( cors() );
app.use( express.json() );
app.use(
    express.urlencoded({
        extended : true
    })
);

app.get('/', (req, res)=>{
    res.json( { message : 'ok' } );
});

//router
app.use('/car', carRouter);

//listen
app.listen( port, () => {
    console.log(` running car at http://localhost:${port}`);
    console.log(config.db.host);
});