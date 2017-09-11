import { DocumentClass } from '../../documents/models/document-class';
import { ContactClass } from '../../contacts/models/contact-class';
import { CoordinateClass } from './coordinate-class';


export interface LandInterface {
    documents: DocumentClass[];
    owners: ContactClass;
    coordinates: CoordinateClass[];
    description: string;
    location: string;
    size: number;
    price: number;
}
