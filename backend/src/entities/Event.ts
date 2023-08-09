import { Price } from "./Price";
import { User } from "./User";
import { Location } from "./Location";

class Event{
    constructor(
        public title: string, 
        public location: Location,
        public date: Date,
        public description:string,
        public banner: string,
        public flyers: string[],
        public coupons: string[],
        public participants: User[],
        public price: Price[],
        public city: string,
    ){ }
}
export {Event};