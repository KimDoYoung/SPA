// const express = require('express');
// const cors = require('cors');
import express, { Application, Request, Response, NextFunction } from 'express';
import cors from 'cors';
import carRouter from './router/car-router';

const app: Application = express();
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

export default app;
