import { OrderClass } from './order-class';
import { UserClass } from './user-class';

export interface OrderInterface {
    id: number;
    type: string; // (referral | holdings)
    order: OrderClass;
    recipient: UserClass;
    amount: number;
    rate: number;    
    status: number; // {sucessful/failed/pending//cancelled}
}
