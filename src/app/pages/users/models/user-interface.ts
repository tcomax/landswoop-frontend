import { ContactClass } from '../../contacts/models/contact-class';


export interface UserInterface {
    id: number;
    contact: ContactClass;
    username: string;
    password: string;
    role: number;
}
