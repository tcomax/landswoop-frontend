import { ContactClass } from './contact-class';
import { UserInterface } from './user-interface';


export class UserClass implements UserInterface{
    id: number;
    name: string;
    phone: string;
    email: string;
    photoUrl: string;
    bank: string;
    accountNum: string;
    invitedBy: string;

    // constructor({_id: number, _contact: ContactClass, _username: string, _password: string, _role: number ) {
    constructor(_user: any) {
            
        this.id = _user.id;
        this.name = _user.name;
        this.phone = _user.phone;
        this.email = _user.email;
        this.photoUrl = _user.photoUrl;
        this.bank = _user.bank;
        this.accountNum = _user.accountNum;
        this.invitedBy = _user.invitedBy;

    }
}
