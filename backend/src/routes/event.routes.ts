import { Router } from "express";
import { EventRepositoryMongoose } from "../repositories/EventRepositoryMongoose";
import { EventUseCase } from "../useCases/EventUseCase";
import { EventController } from "../controllers/EventController";

class EventRoutes { 
    public router: Router;
    private eventController: EventController;

    constructor(){
        this.router = Router();
        const eventRepository = new EventRepositoryMongoose();
        const eventUseCase = new EventUseCase(eventRepository);
        this.eventController = new EventController(eventUseCase);
        this.initRoutes();
    };

    initRoutes(){
        //como no app.ts esta classe é inicializada com '/events', ele passa a ser subentendido
        this.router.post(
            '/', 
            this.eventController.create.bind(this.eventController));
    };


}
export {EventRoutes};