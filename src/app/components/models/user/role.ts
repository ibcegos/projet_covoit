import { User } from "./user";

export class Role {

    constructor (public id?: number, public title?:string, public userList?:User[], 
        public createdAt?: Date, public updatedAt?: Date, public deletedAt?: Date ) 
        {
            
        }


}