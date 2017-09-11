import { AuthorityClass } from '../../authorities/models/authority-class';
import { ContactClass } from '../../contacts/models/contact-class';

export interface DocumentInterface {
    id: number;
    type: string; // [CofO/SurveyPLan/Layout/Deed of Assignment]
    registrationNumber: string;  // official document number
    authority: AuthorityClass;
    image: string;
    owner: ContactClass;
}
