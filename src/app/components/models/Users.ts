import { Rides } from "./Rides";

export class Users {
    constructor(
        public id: number,
        public username: string,
        public lastName: string,
        public firstName: string,
        public email: string,
        public password: string,
        
        public role: string,
        public rides: Rides,
        public avatar: string
    ) { }
}

