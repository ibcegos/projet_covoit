import { Rides } from "./Rides";
import { Users } from "./Users";

export class Riders {
    constructor(
        public user : Users,
        public rides : Rides[]
    ) { }
}

