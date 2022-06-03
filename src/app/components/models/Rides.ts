import { Recurrents } from "./recurrents";
import { Simples } from "./simples";


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