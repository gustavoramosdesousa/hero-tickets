import axios from "axios";
import { Event } from "../entities/Event";
import { HttpException } from "../interfaces/HttpException";
import { EventRepository} from "../repositories/EventRepository";

class EventUseCase{
    addParticipant(id: string, name: string, email: string) {
        const event = this.eventRepository.findEventById(id);
        
        if(!event){
            throw new HttpException(400, 'Event not found');
        }
        // adiciona um participante e recupera seu ID

        // atualiza evento com o ID do participante

    }
    //nível da arquitetura que já começa a ter dependências
    constructor(private eventRepository:EventRepository){};
    private async getCityNameByCoordinates(latitude:string, longitude:string){
        /*try{
        const response = await axios
            .get(`http://maps.googleapis.com/maps/api/geocode/json?=latlng=${latitude},${longitude}&key=${googleCloudAPIkey}`)
        if(response.data.status==='OK' && response.data.results.length > 0){
            const address = response.data.results[0].address_components;
            const cityType = address.find((type:any )=> type.types.includes('administrative_area_level_2) && type.types.includes('political'));
        }
            return cityType.long_name;
        }catch(error){
            throw new HttpException(401,'Error request city name.');
        }
        throw new HttpException(401,'City not found.');
            */
        return "Campina Grande";
    }
    calculateDistanceBetweenPoints(latitude: string, longitude: string): number {
        throw new Error("Method not implemented.");
    }
    
    async findEventById(id: string) {
        if(!id) {throw new HttpException(400, 'ID is required.')}
        const findEventById = await this.eventRepository.findEventById(id);
        return findEventById;
     }
    async findEventByLocation(latitude: string, longitude: string) {
       const cityName = await this.getCityNameByCoordinates(latitude,longitude); //localização do usuário
       const findEventByCity = await this.eventRepository.findEventsByCity(cityName); //todos os eventos da cidade do usuário
       const eventWithRadius = findEventByCity.filter(event => {
        const distance = this.calculateDistanceBetweenPoints(event.location.latitude,event.location.longitude)
        return distance <= 3
       });

       return eventWithRadius;
    }
    async findEventsByCategory(category: string) {
        if(!category) throw new HttpException(400, 'Category is required.');
        const events = await this.eventRepository.findEventsByCategory(category);
    
        return events;
     }
     async findEventsByName(name: string) {
        if(!name) throw new HttpException(400, 'Name is required.')
        const events = await this.eventRepository.findEventsByName(name);
    
        return events;
     }
    async create(eventData: Event){
        if(!eventData.banner){
            throw new HttpException(400, "Banner is required");
        }
        if(!eventData.flyers){
            throw new HttpException(400, "Flyers is required");
        }
        if(!eventData.location){
            throw new HttpException(400, "Location is required");
        }
        /** verificar se existe um evento no mesmo local e horario */
        const verifyEvent = await this.eventRepository.findByLocationAndDate(eventData.location, eventData.date);

        if(verifyEvent){
            throw new HttpException(400, 'Event alread exists.');
        }


        const cityName = await this.getCityNameByCoordinates(eventData.location.latitude, eventData.location.longitude);
       
        eventData = { ...eventData,
            city: cityName};

        const result = await this.eventRepository.add(eventData);
        return result;
    }


    

}
export {EventUseCase};