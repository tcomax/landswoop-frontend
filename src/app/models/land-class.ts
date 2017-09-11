import { DocumentClass } from './document-class';
import { ContactClass } from './contact-class';
import { CoordinateClass } from './coordinate-class';

export class LandClass {
    id: number;
    documents: DocumentClass[];
    owners: ContactClass[];
    coordinates: CoordinateClass[];
    description: string;
    location: string;
    size: number;
    price: number;

    constructor(_id: number, _documents: DocumentClass[], _owners: ContactClass[],
                _coordinates: CoordinateClass[], _description: string,
                _location: string, _size: number, _price: number) {
        this.id = _id;
        this.documents = _documents;
        this.owners = _owners;
        this.coordinates = _coordinates;
        this.description = _description;
        this.location = _location;
        this.size = _size;
        this.price = _price;
    }
}
