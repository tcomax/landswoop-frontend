import { ContactInterface } from './contact-interface';
export class ContactClass implements ContactInterface {
    id: number;
    firstname: string;
    lastname: string;
    email: string;
    phone: string;

    constructor(_id: number, _firstname: string, _lastname: string, _email: string, _phone: string) {
        this.id = _id;
        this.firstname = _firstname;
        this.lastname = _lastname;
        this.email = _email;
        this.phone = _phone;
    }
}
