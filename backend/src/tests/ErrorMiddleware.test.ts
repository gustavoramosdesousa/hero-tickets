import  request  from "supertest";
import { Event } from "../entities/Event";
import { App } from "../app";
import { NextFunction, Request, Response } from "express";
import { errorMiddleware } from "../middlewares/error.middlewares";
import { HttpException } from "../interfaces/HttpException";

const app = new App();
const express = app.app;

describe('Middleware test', () => {
    
    it('should response with the correct status an message HttpException', async () => {
        const httpException : HttpException= { name: 'HttpException', status: 404, message: 'Not found'};
        const req : Partial<Request> = {};
        const res : Partial<Response> = {
            status: jest.fn().mockReturnThis(),
            json: jest.fn()
        };
        const next: NextFunction = jest.fn();
        
        errorMiddleware(httpException, req as Request, res as Response, next);



        expect(res.status).toHaveBeenCalledWith(404);
        expect(res.json).toHaveBeenCalledWith({
                name: 'HttpException',
                status: 404,
                message: 'Evento criado com sucesso.'
            });
    });

})