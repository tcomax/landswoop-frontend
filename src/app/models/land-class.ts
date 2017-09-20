import { DocumentClass } from './document-class';
import { ContactClass } from './contact-class';
import { CoordinateClass } from './coordinate-class';

export class LandClass {
    id: number;
    ownerId: number;
    description: string;
    location: string;
    area: number;
    available: number;
    price: number;

    constructor(
        _id: number, 
        _ownerId: number,
        _description: string,
        _location: string, 
        _area: number, 
        _available: number, 
        _price: number,
    ) {
        this.id = _id;
        this.ownerId = _ownerId;
        this.description = _description;
        this.location = _location;
        this.area = _area;
        this.available = _available;
        this.price = _price;
    }
}
