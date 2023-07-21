import express from 'express';
const indexRoute = express.Router();

indexRoute.get('/health', (req,res)=>{
    res.send('OK');
})

export default indexRoute;
