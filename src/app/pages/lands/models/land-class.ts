import { DocumentClass } from '../../documents/models/document-class';
import { ContactClass } from '../../contacts/models/contact-class';
import { CoordinateClass } from './coordinate-class';

export class LandClass {
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
        this.documents = _documents;
        this.owners = _owners;
        this.coordinates = _coordinates;
        this.description = _description;
        this.location = _location;
        this.size = _size;
        this.price = _price;
    }
}
