import  request  from "supertest";
import { Event } from "../entities/Event";
import { App } from "../app";

const app = new App();
const express = app.app;

describe('Event test', () => {
    
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
        const response = await request(express)
            .post('/events')
            .field('title', event.title)
            .field('description', event.description)
            .field('city', event.city)
            .field('coupons', event.coupons)
            .field('location[longitude]', event.location.longitude)
            .field('location[latitude]', event.location.latitude)
            .field('price[sector]', event.price[0].sector)
            .field('price[amount]', event.price[0].amount)
            //.attach('banner','./1.jpg')
            //.attach('flyers','./2.jpg')
            ;
        if(response.error){
            console.log('Event Test Error:',response.error);
        }
        expect(response.status).toBe(201);
        expect(response.body).toEqual({message: 'Evento criado com sucesso.'});
    });

})