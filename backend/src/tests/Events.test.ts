import  request  from "supertest";
import { Event } from "../entities/Event";
import { App } from "../app";
import { EventUseCase } from "../useCases/EventUseCase";
import { EventRepository } from "../repositories/EventRepository";

const app = new App();
const express = app.app;

const mockedEvent : Event = {
    title: 'Jorge e Matheus',
    price: [{ sector: 'Pista', amount: '20' }],
    categories:['Show'],
    description: 'Descrição do evento',
    city: 'BH',
    location: {
        latitude: '-20.0249057',
        longitude: '-44.0297868',
    },
    coupons: [],
    date: new Date(),
    participants: [],
    banner: 'banner.png',
    flyers: ['flyer1.png','flyer2.png']
};


describe('Event test', () => {
    it('/GET/:id Get Event by ID', async () => {
        const testId = '';
        const response = await request(express)
            .get('/events/' + testId);
        if(response.error){
            console.log('Event Test Error:',response.error);
        }
        expect(response.status).toBe(200);
       // expect(response.body).toEqual({message: 'Evento criado com sucesso.'});
    });
    it('/GET  Get Event by Category', async () => {
        const testCategory = '';
        const response = await request(express)
            .get('/events/category/' + testCategory);
        if(response.error){
            console.log('Event Test Error:',response.error);
        }
        expect(response.status).toBe(200);
        expect(response.body.length).toBeGreaterThan(0); //equivalente ao .length
    });
    it('/GET Get Event by Location', async () => {
        const testLatitude= '', testLongitude  = '';
        const response = await request(express)
            .get('/events?latitude=' + testLatitude + '&longitude=' + testLongitude);
        if(response.error){
            console.log('Event Test Error:',response.error);
        }
        expect(response.status).toBe(200);
        expect(response.body.length).toBeGreaterThan(0); //equivalente ao .length
       // expect(response.body).toEqual({message: 'Evento criado com sucesso.'});
    });



    
    it('/POST Event insert User', async () => {
        const eventId : string = '';
        const response = await request(express)
            .post('/events/'+ eventId + '/participants')
            .send({
                name: 'Gustavo Ramos',
                email: 'gustavogrs@gmail.com'
            }) ;
        if(response.error){
            console.log('Event Test Error:',response.error);
        }
        expect(response.status).toBe(200);
        //expect(response.body).toEqual({message: 'Evento criado com sucesso.'});
    });
    
    it('/POST Event', async () => {
        const event = {
            title: 'Jorge e Matheus',
            price: [{ sector: 'Pista', amount: '20' }],
            categories:['Show'],
            description: 'Descrição do evento',
            city: 'BH',
            location: {
                latitude: '-20.0249057',
                longitude: '-44.0297868',
            },
            coupons: [],
            date: new Date(),
            participants: [],
        };
        console.log(event);
        const response = await request(express)
            .post('/events')
            .field('title', event.title)
            .field('description', event.description)
            .field('city', event.city)
            .field('coupons', event.coupons)
            .field('date', event.date.toISOString())
            .field('categories',event.categories)
            .field('location[longitude]', event.location.longitude)
            .field('location[latitude]', event.location.latitude)
            .field('price[sector]', event.price[0].sector)
            .field('price[amount]', event.price[0].amount)
            .attach('banner','C:\\Users\\AdminUser\\Pictures\\1.jpg')
            .attach('flyers','C:\\Users\\AdminUser\\Pictures\\2.jpg') ;
        if(response.error){
            console.log('Event Test Error:',response.error);
        }
        expect(response.status).toBe(201);
        expect(response.body).toEqual({message: 'Evento criado com sucesso.'});
    });
    /** Mock do repositório */
    const eventRepository : any = {
        add: jest.fn(),
        findEventsByCategory: jest.fn(),
        findByLocationAndDate: jest.fn(),
        findEventsByCity: jest.fn(),
        findEventsByName: jest.fn(),
        findEventById: jest.fn()
    };
    const eventUseCase = new EventUseCase(eventRepository)

    describe('Unit Test', ()=> {
        afterEach(() => {
            jest.clearAllMocks();
        });

        it('should return an array of events by CATEGORY', async () =>{
            eventRepository.findEventsByCategory.mockResolvedValue([mockedEvent]);
            const result = await eventUseCase.findEventsByCategory('Show');
            expect(result).toEqual([mockedEvent]);
            expect(eventRepository.findEventsByCategory).toHaveBeenCalledWith('Carnaval');
        });

        it('should return an array of events by NAME', async () =>{
            eventRepository.findEventsByName.mockResolvedValue([mockedEvent]);
            const result = await eventUseCase.findEventsByName('Jorge e Mateus');
            expect(result).toEqual([mockedEvent]);
            expect(eventRepository.findEventsByName).toHaveBeenCalledWith('Jorge e Mateus');
        });

        it('should return an array of events by ID', async () =>{
            eventRepository.findEventById.mockResolvedValue([mockedEvent]);
            const result = await eventUseCase.findEventById('Jorge e Mateus');
            expect(result).toEqual([mockedEvent]);
            expect(eventRepository.findEventById).toHaveBeenCalledWith('Jorge e Mateus');
        });
    });
})