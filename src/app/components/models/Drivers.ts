
import { Rides } from "./Rides";
import { Users } from "./Users";

export class Drivers {
    constructor(
        public user : Users,
        public rides : Rides[],


    ) { }
}

