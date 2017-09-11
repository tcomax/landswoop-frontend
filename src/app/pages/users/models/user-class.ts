import { ContactClass } from '../../contacts/models/contact-class';


export class UserClass {
    id: number;
    contact: ContactClass;
    username: string;
    password: string;
    role: number;

    constructor(_id: number, _contact: ContactClass, _username: string, _password: string, _role: number ) {
        this.id = _id;
        this.contact = _contact;
        this.username = _username;
        this.password = _password;
        this.role = _role;
    }
}
