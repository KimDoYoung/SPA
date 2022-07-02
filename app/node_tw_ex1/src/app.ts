// app.ts
import express from 'express';
const app = express();
app.get('/', (req, res)=>{
    console.log('node mon ');
    res.send('hello1');
});

app.listen(5000, ()=>{
    console.log('Server running at 5000');
});