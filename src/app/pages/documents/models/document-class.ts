import { AuthorityClass } from '../../authorities/models/authority-class';
import { ContactClass } from '../../contacts/models/contact-class';

export class DocumentClass {
    id: number;
    type: string; // [CofO/SurveyPLan/Layout/Deed of Assignment]
    registrationNumber: string;  // official document number
    authority: AuthorityClass;
    image: string;
    owner: ContactClass;

    constructor(_id: number, _type: string, _registrationNumber: string, 
                _authority: AuthorityClass, _image: string, _owner: ContactClass) {
        this.id = _id;
        this.type = _type; // [CofO/SurveyPLan/Layout/Deed of Assignment]
        this.registrationNumber = _registrationNumber;  // official document number
        this.authority = _authority;
        this.image = _image;
        this.owner = _owner;
    }
}
