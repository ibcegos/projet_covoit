import { Role } from "./role";

export class User {

    constructor (public id?: number, public lastName?: string, public firstName?: string,
        public pseudo?: string, public password?: string, public email?: string, public role?: Role, 
        public isConnect?: boolean, public phoneNumber?: string, public avatar?: string, public verified?: boolean,
        public createdAt?: Date, public updatedAt?: Date, public deletedAt?: Date) 
        {

        }
    


}
