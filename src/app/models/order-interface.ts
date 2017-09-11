import { DocumentClass } from './document-class';
import { UserClass } from './user-class';
import { LandClass } from './land-class';

export interface OrderInterface {
    id: number;
    type: string;       // {sell/buy}
    buyer: UserClass;
    seller: UserClass;
    land: LandClass;
    quantity: number;
    total: number;
    status: string;     // {sucessful/failed/pending//cancelled}
    date: Date;   // {sucessful/failed/pending//cancelled}
    
}
