import { DocumentClass } from './document-class';
import { UserClass } from './user-class';
import { LandClass } from './land-class';
import { OrderClass } from './order-class';

export interface PorfolioInterface {
    id: number;
    owner: UserClass;
    land: LandClass;
    status: string; 
    quantity: number;
    
}
