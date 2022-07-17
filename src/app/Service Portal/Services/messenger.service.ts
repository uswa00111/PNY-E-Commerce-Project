import { Injectable } from '@angular/core';
import { ReplaySubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MessengerService {

   subjectRequestsSubscription = new ReplaySubject(1);
  
  constructor() { }

  sendMsgToObserver(notificationForSubs:any){
    this. subjectRequestsSubscription.next(notificationForSubs);
  }
  
  GetMessageWithData(){
      return this. subjectRequestsSubscription.asObservable();
  }

}
