import { OrderClass } from './order-class';
import { UserClass } from './user-class';
import { LandClass } from './land-class';

export class TransactionClass {
    id: number;
    type: number;       // {sell/buy}
    landId: number;
    location: string;
    available: number;
    area: number;
    price: number;
    quantity: number;
    total: number; 
    date: Date;
    status;


    constructor(
        _id: number,
        _type: number, 
        _landId: number, 
        _location: string,
        _available: number,
        _area: number,
        _quantity: number, 
        _price: number,
        _date: Date,
        _total: number,
        _status) {
        this.id = _id;
        this.type = _type;
        this.landId = _landId;
        this.location = _location;
        this.available = _available;
        this.area = _area;
        this.quantity = _quantity;
        this.price = _price;        
        this.landId = _landId;        
        this.total = _total;
        this.date = _date;
        this.status = _status;
    }


}
