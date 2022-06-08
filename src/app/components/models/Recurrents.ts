import { Time } from "@angular/common";
import { Rides } from "./Rides";


export class Recurrents {
    constructor(
        public id?: number,
        public jourAller? : Date,
        public dateRetour? : Date,
        public timeRetour? : Time,
        public rides? : Rides[]

    ) { }
}