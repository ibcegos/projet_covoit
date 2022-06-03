import { Rides } from "./rides";
import { Users } from "./Users";

export class Riders {
    constructor(
        public user : Users,
        public rides : Rides[]
    ) { }
}