import { AuthorityInterface } from './authority-interface';
import { ContactClass } from '../../contacts/models/contact-class';

export class AuthorityClass implements AuthorityInterface {
    id: number;
    type: number;
    name: string;
    contacts: ContactClass[];

    constructor(_id: number, _type: number, _name: string, _contacts: ContactClass[]) {
        this.id = _id;
        this.type = _type;
        this.name = _name;
        this.contacts = _contacts;
    }

}
