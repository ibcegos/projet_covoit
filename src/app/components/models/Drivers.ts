import { Rides } from "./rides";
import { Users } from "./Users";

export class Drivers {
    constructor(
        public user : Users,
        public rides : Rides[],


    ) { }
}