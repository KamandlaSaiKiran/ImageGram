import express from 'express';
import connectDB from './config/dBConfig.js';
import apiRouter from "./routing/apiRouter.js";
import swaggerUi from 'swagger-ui-express';
import swaggerJSDoc from 'swagger-jsdoc';
import swaggerOptions from './config/swaggerConfig.js';
const PORT = 3000;
const app = express();//creates app instance server
app.listen(PORT,(req,res)=>{
    console.log(`Server is running on ${PORT}`);
    connectDB();
})

app.use(express.json());
app.use(express.text());

app.use('/api', apiRouter);//request_raised-->cloudinary_setup-->middleware
const specs = swaggerJSDoc(swaggerOptions);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(specs));

// app.get('/ping/:name',(req,res)=>{
//     console.log(req.params.name);
//     console.log(req.body);
//     console.log("Inside the query" + JSON.stringify(req.query));
//     return res.json({message:"Hello All"});
    
// })
// app.post('/hello',(req,res)=>{
//     return res.send("<h1>Sai Kiran</h1>");
// })
// app.put('/p',(req,res)=>{
//     return res.json({message:'PUT REQUEST:Just put something'});
// })
// app.delete('/d',(req,res)=>{
//     return res.json({message:'DELETE REQUEST:Just delete something '});
// })
