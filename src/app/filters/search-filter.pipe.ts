import { Injectable, Pipe, PipeTransform } from '@angular/core';
import { LandClass } from '../models/land-class';
import { PortfolioClass } from '../models/portfolio-class';
import { CommissionClass } from '../models/commission-class';
import { OrderClass } from '../models/order-class';

@Pipe({
 name: 'searchfilter'
})

@Injectable()
export class SearchFilterPipe implements PipeTransform {
 transform(items: any[], field: string, value: string): any[] {
    console.log('value-'.concat(value));
    console.log(items);
    if (!items) { return []; }
    if (value === undefined) { value = ''; }
    if (LandClass.prototype.isPrototypeOf(items[0])) {
        return items.filter(it => it[field].toLowerCase().includes(value.toLowerCase()));
    }
    if (PortfolioClass.prototype.isPrototypeOf(items[0])) {
        return items.filter(it => it.land[field].toLowerCase().includes(value.toLowerCase()));
    }
    if (CommissionClass.prototype.isPrototypeOf(items[0])) {
        return items.filter(it => it.order.land[field].toLowerCase().includes(value.toLowerCase()));
    }
    if (OrderClass.prototype.isPrototypeOf(items[0])) {
        return items.filter(it => it.land[field].toLowerCase().includes(value.toLowerCase()));
    }
   
 }
}
