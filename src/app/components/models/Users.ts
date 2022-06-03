import { Rides } from "./rides";



export class Users {
    constructor(
        public id?: number,
        public pseudo?: string,
        public lastName?: string,
        public firstName?: string,
        public email?: string,
        public password?: string,

        public role?: string,
        public rides?: Rides,
        public avatar?: string
    ) { }
}
