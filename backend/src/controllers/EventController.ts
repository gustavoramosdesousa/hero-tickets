import { Request, Response, NextFunction } from "express";
import { EventUseCase} from "../useCases/EventUseCase";
import { Event } from "../entities/Event";

class EventController{
   
   

    //depende dos usecases
    constructor(private eventUseCase: EventUseCase){};

    async create(request: Request, response: Response, next: NextFunction){
        let eventData: Event = request.body;
        const files = request.files as any;
        if(files){
            const banner = files.banner[0];
            const flyers = files.flyers;
            
            eventData = { ...eventData, 
                          banner: banner.filename, 
                          flyers: flyers.map((flyer: any)=> flyer.filename)
                        };
        }
        console.log('EventController::create:',eventData);
        console.log('EventController::create:files:', files);
        // alternativa: const eventData: {title: String ...} = request.body;
        try {
            const createEvent = await this.eventUseCase.create(eventData);
            return response
                    .status(201)
                    .json({message: 'Evento criado com sucesso.'});
        } catch (error) {
            next(error);
        }
    }
    async findEventByLocation(request: Request, response: Response, next: NextFunction){
        const {latitude, longitude} = request.query; //"uri/latitude=xpto&longitude=yto" 
        try {
            const events = await this.eventUseCase.findEventByLocation(String(latitude), String(longitude));
            return response.status(200).json(events);
        } catch (error) {
            next(error);
        }
    }
    async filterEvents(request: Request, response: Response, next: NextFunction){
        const {latitude, longitude, name, date, category, radius, price} = request.query; //"uri/latitude=xpto&longitude=yto" 
        try {
            const events = await this.eventUseCase.findEventsByQuery(String(category), String(name), String(price), new Date());
            //category: string, name: string, radius:string, price: string, date: Date
            return response.status(200).json(events);
        } catch (error) {
            next(error);
        }
    }
    async findEventById(request: Request, response: Response, next: NextFunction){
        const {id} = request.params; //"uri/latitude=xpto&longitude=yto" 
        try {
            const events = await this.eventUseCase.findEventById(String(id));
            return response.status(200).json(events);
        } catch (error) {
            next(error);
        }
    }
    async addParticipant(request: Request, response: Response, next: NextFunction){
        const {id} = request.params; //"uri/latitude=xpto&longitude=yto" 
        const {name, email} = request.body;
        try {
            const events = await this.eventUseCase.addParticipant(String(id),String(name),String(email));
            return response.status(200).json(events);
        } catch (error) {
            next(error);
        }
    }
    async findEventsByName(request: Request, response: Response, next: NextFunction){
        const {name} = request.query; //"uri/latitude=xpto&longitude=yto" 
        try {
            const events = await this.eventUseCase.findEventsByName(String(name));
            return response.status(200).json(events);
        } catch (error) {
            next(error);
        }
    }
    async findEventsByCategory(request: Request, response: Response, next: NextFunction){
        const {category} = request.params; //"uri/latitude=xpto&longitude=yto" 
        try {
            const events = await this.eventUseCase.findEventsByCategory(String(category));
            return response.status(200).json(events);
        } catch (error) {
            next(error);
        }
    }
    async findMainEvents(request: Request, response: Response, next: NextFunction){
 
        try {
            const events = await this.eventUseCase.findEventsMain();
            return response.status(200).json(events);
        } catch (error) {
            next(error);
        }
    }
}
export {EventController};