import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Subject } from 'rxjs/Subject';
 
@Injectable()
export class SearchService {
    private subject = new Subject<any>();
 
    sendMessage(message: string) {
        this.subject.next(message);
        // console.log('SearchService sending '.concat(message));
    }
 
    clearMessage() {
        // console.log('SearchService clearing a message');                
        this.subject.next();
    }
 
    getMessage(): Observable<any> {
        // console.log('SearchService getting a message');        
        return this.subject.asObservable().delay(50);
    }
}
