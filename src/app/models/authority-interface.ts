import { ContactClass } from './contact-class';

export interface AuthorityInterface {
    id: number;
    type: number;
    name: string;
    contacts: ContactClass[];
}
