import express from 'express';
import { Application } from 'express-serve-static-core';
import { connectMongoDB } from './infra/mongoDB';
import { errorMiddleware } from './middlewares/error.middlewares';
import { EventRoutes } from './routes/event.routes';

class App{
    public app : Application;
    private eventRoutes = new EventRoutes();

    constructor(){
        this.app = express();
        this.middlewaresInitialize();
        this.initializeRoutes();
        this.interceptionError();
        
        connectMongoDB();
    };


    interceptionError(){
        this.app.use(errorMiddleware);
    };
        
    initializeRoutes(){
        this.app.use('/events', this.eventRoutes.router);
        //this.app.use('/users', this.userRoutes.router);
    };

    middlewaresInitialize(){
        this.app.use(express.json());
        this.app.use(express.urlencoded({extended:true})); //converte as urls, para remover espaço e colocar "%20" por exemplo
    };

    listen(){
        this.app.listen(3333, ()=>{
            console.log('Server is running...');
        });
    };
}
export {App};