import { Time } from "@angular/common";
import { Rides } from "./rides";

export class Recurrents {
    constructor(
        public id?: number,
        public jourAller? : Date,
        public dateRetour? : Date,
        public timeRetour? : Time,
        public rides? : Rides[]


    ) { }
}