// import { env } from 'node:process';
import app from './app';
import http from 'http';
import dotenv from 'dotenv';

const server = http.createServer(app);

dotenv.config({ path:'config.env'});


const port = process.env.PORT || 8080;
server.listen(port,()=>{
    console.log(`server is live on ${port} .... `)
})