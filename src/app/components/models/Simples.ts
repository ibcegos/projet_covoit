import { Time } from "@angular/common";
import { Rides } from "./Rides";

export class Simples {
    constructor(
        public id?: number,
        public dateAller? : string,
        public dateRetour? : Date,
        public timeRetour? : Time,
        public rides? : Rides[]

    ) { }
}