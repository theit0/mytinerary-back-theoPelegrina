import express from "express";
import morgan from "morgan";


const app = express();
const PORT = 3000;



app.use(express.json())
app.use(express.urlencoded({extended: false}))

app.use(morgan('dev'))

app.get('/', (req,res)=>{
    res.send('Hello word')
});

app.get('/users',(req,res) => {
    res.json({
        user:'Theo'
    })
})


app.listen(PORT,()=> console.log('Server running on port: '+PORT));