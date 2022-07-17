import { Injectable } from '@angular/core';
import { ReplaySubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MessengerService {

   subjectRequestsSubscription = new ReplaySubject(1);
  
  constructor() { }

  sendMsgToObserver(notificationForSubs:Boolean){
    this. subjectRequestsSubscription.next(notificationForSubs);
  }
  
  GetMessageWithData(){
      return this. subjectRequestsSubscription.asObservable();
  }

}
