import { DocumentClass } from './document-class';
import { UserClass } from './user-class';
import { LandClass } from './land-class';

export interface OrderInterface {
    id: number;
    type: number;       // {sell/buy}
    buyer: UserClass;
    seller: UserClass;
    land: LandClass;
    quantity: number;
    status: string; 
    total: number; 
    date: Date;   // {sucessful/failed/pending//cancelled}
    
}
