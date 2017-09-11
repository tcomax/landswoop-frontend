import { DocumentClass } from '../../documents/models/document-class';
import { UserClass } from '../../users/models/user-class';
import { LandClass } from '../../lands/models/land-class';

export interface OrderInterface {
    id: number;
    type: number;       // {sell/buy}
    buyer: UserClass;
    land: LandClass;
    quantity: number;
    total: number;
    status: string;     // {sucessful/failed/pending//cancelled}
}
