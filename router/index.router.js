import express from 'express'
import cityRouter from './city.router.js';


const router = express.Router();

router.get('/', (req,res)=>{
    res.send('Hello word')
});

router.use('/cities',cityRouter);


export default router;