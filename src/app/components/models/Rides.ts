import { Recurrents } from "./Recurrents";
import { Simples } from "./Simples";

export class Rides {
    constructor(
        public id?: number,
        public departure?: string,
        public destination?: string,
        public seats?: number,
        public recurrentList?: Recurrents,
        public simpleList?: Simples,
        public vehiculeType?: string,
        public rideType?:string
       
       

        
    ) { }
} 

