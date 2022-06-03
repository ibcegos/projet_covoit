import { Time } from "@angular/common";
import { Rides } from "./rides";

export class Simples {
    constructor(
        public id?: number,
        public dateAller? : string,
        public dateRetour? : Date,
        public timeRetour? : Time,
        public rides? : Rides[]


    ) { }
}