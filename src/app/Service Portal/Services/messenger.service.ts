import { Injectable } from '@angular/core';
import { ReplaySubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MessengerService {

  _Subject = new ReplaySubject(1);
  constructor() { }

  SendMessageWithData(MessageAndData:Boolean){
    this._Subject.next(MessageAndData);
  }
  GetMessageWithData(){
    return this._Subject.asObservable();
  }
}
