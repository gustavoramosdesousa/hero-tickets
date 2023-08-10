import { User } from "../entities/User";
interface UserRepository{
    add(user: User): Promise<User>;
    verifyIsUserExists(email: string): Promise<User | undefined>;
    /*findByLocationAndDate(location: Location, date: Date): Promise<Event | undefined>;
    findEventsByCity(city : string): Promise<Event[]>;
    findEventsByCategory(category : string): Promise<Event[]>;
    findEventsByName(name : string): Promise<Event[]>;*/
    findUserById(id : string): Promise<User | undefined>;
}
export{UserRepository};