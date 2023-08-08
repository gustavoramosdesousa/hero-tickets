import { Price } from "./Price";
import { User } from "./User";
import { Location } from "./Location";

class Event{
    constructor(public title: string, 
                public location: Location,
                public date: Date,
                public banner: string,
                public coupons: string[],
                public participants: User[],
                public description:string,
                public price: Price[],
                public city: string,

    ){

    }
}
export {Event};