import { Event } from "../entities/Event";
import { Location } from "../entities/Location";
interface EventRepository{
    findEventsMain(date: Date): Promise<Event[]>;
    add(event: Event): Promise<Event>;
    findByLocationAndDate(location: Location, date: Date): Promise<Event | undefined>;
    findEventsByCity(city : string): Promise<Event[]>;
    findEventsByCategory(category : string): Promise<Event[]>;
    findEventsByName(name : string): Promise<Event[]>;
    findEventById(id : string): Promise<Event | undefined>;
    findEventsByQuery(category: string, name: string, price: string, date: Date): Promise<Event[]>;
}
export{EventRepository};