import { DocumentClass } from './document-class';
import { ContactClass } from './contact-class';
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
