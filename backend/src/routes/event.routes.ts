import { Router } from "express";
import { EventRepositoryMongoose } from "../repositories/EventRepositoryMongoose";
import { EventUseCase } from "../useCases/EventUseCase";
import { EventController } from "../controllers/EventController";
import { upload } from "../infra/multer";

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
            upload.fields([{
                name: 'banner',
                maxCount: 1
            },
            {
                name: 'flyers',
                maxCount: 3
            }]),
            this.eventController.create.bind(this.eventController));

        this.router.get(
            '/', 
            this.eventController.findEventByLocation.bind(this.eventController)
        );
        this.router.get(
            '/category/:category', 
            this.eventController.findEventsByCategory.bind(this.eventController)
        );
        this.router.get(
            '/name/:name', 
            this.eventController.findEventsByName.bind(this.eventController)
        );
        this.router.get(
            '/:id', 
            this.eventController.findEventById.bind(this.eventController)
        );
        this.router.post(
            '/:id/participants', 
            this.eventController.findEventById.bind(this.eventController)
        );
    };


}
export {EventRoutes};