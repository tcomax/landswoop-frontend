import { DocumentClass } from './document-class';
import { ContactClass } from './contact-class';
import { CoordinateClass } from './coordinate-class';


export interface LandInterface {
    id: number;
    ownerId: number;
    description: string;
    location: string;
    area: number;
    available: number;
    price: number;
}
