import { Event } from "../entities/Event";
import { EventRepository} from "../repositories/EventRepository";

class EventUseCase{
    //nível da arquitetura que já começa a ter dependências
    constructor(private eventRepository:EventRepository){};

    async create(eventData: Event){
        const result = await this.eventRepository.add(eventData);
        
        return result;
    }
}
export {EventUseCase};