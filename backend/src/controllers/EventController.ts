import { Request, Response, NextFunction } from "express";
import { EventUseCase} from "../useCases/EventUseCase";

class EventController{

    //depende dos usecases
    constructor(private eventUseCase: EventUseCase){};

    async create(request: Request, response: Response, next: NextFunction){
        const eventData = request.body;
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
}
export {EventController};