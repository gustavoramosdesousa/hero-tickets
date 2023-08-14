import mongoose from "mongoose";
import { Event } from "../entities/Event";
import { EventRepository } from "../repositories/EventRepository";
import { Location } from "../entities/Location";

const eventSchema = new mongoose.Schema({
    title: String,
    location:{
        latitude: String,
        longitude :String
    },
    date: Date,
    createdAt: {
        type:Date,
        default:Date.now
    },
    description: String,
    categories: [String],
    banner: String,
    flyers: [String],
    price: {
        type: Array,
    },
    city: String,
    participants:{
        type: Array,
        ref: 'User'
    }
});

const EventModel = mongoose.model('Event', eventSchema);

class EventRepositoryMongoose implements EventRepository{
    async findEventsByQuery(category: string, name: string, price: string, date: Date): Promise<Event[]> {
        const findedEvents = await EventModel.find({
            title: {
                $regex: name, 
                $options: 'i'
            },
            date: {
                $gte: name, 
                $options: 'i'
            },
            category: category
        }).exec();
        return findedEvents.map(event => event.toObject());
    }
    async findEventsByCity(city: string): Promise<Event[]> {
        const findedEvents = await EventModel.find({city}).exec();
        return findedEvents.map(event => event.toObject());
    }
    async findEventsByCategory(category: string): Promise<Event[]> {
        const findedEvents = await EventModel.find({categories: category}).exec();
        return findedEvents.map(event => event.toObject());
    }
    async findEventsMain(date: Date): Promise<Event[]> {
        //.limit: limita a até 4 retornos
        const endDate = new Date(date);
        endDate.setMonth(endDate.getMonth() + 1);

        const findedEvents = await EventModel.find({date: {$gte: date, $lt: endDate}}).limit(4).exec();
        return findedEvents.map(event => event.toObject());
    }
    async findEventById(id:string): Promise<Event | undefined> {
        const findEvent = await EventModel.findOne({id}).exec();
        return findEvent ? findEvent.toObject() : undefined;
    }
    async findEventsByName(name: string): Promise<Event[]> {
        const findedEvents = await EventModel.find({
            title: {
                $regex: name, 
                $options: 'i'
            }
        }).exec();
        return findedEvents.map(event => event.toObject());
    }
    async add(event : Event): Promise<Event>{
        const eventModel = new EventModel(event);

        await eventModel.save();
        return event;
    };
    async findByLocationAndDate(location: Location, date: Date): Promise<Event | undefined> {
        const findEvent = await EventModel.findOne({location, date}).exec();
        return findEvent ? findEvent.toObject() : undefined;
    }
}
export {EventRepositoryMongoose};