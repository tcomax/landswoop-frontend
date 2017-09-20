import { ContactInterface } from './contact-interface';

export class ContactClass implements ContactInterface {

    id: number;
    name: string;
    email: string;
    phone: string;

    constructor(_contact: any) {
        this.id = _contact.id;
        this.name = _contact.name;
        this.email = _contact.email;
        this.phone = _contact.phone;
    }
}
