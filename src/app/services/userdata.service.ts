import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Subject } from 'rxjs/Subject';
import { UserClass } from '../models/user-class';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/delay';
 
@Injectable()
export class UserDataService {
    private subject = new Subject<any>();
 
    setData(me: string, code: string, command: string, msg: any) {
        const payload = { sender: me, key: code, cmd: command, data: msg };
        this.subject.next(payload);
        console.log(`${me} sent data notification for ${JSON.stringify(msg)}`);
    }
 
    resetData() {
        console.log('Reset User Service');                
        this.subject.next();
    }
 
    getData(me: string): Observable<any> {
        console.log(`${me} subscribed to UserDataService`);        
        return this.subject.asObservable().delay(50);
    }
}
