import { Component, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { DataServiceService } from 'src/app/Service Portal/Services/data-service.service';
import { MessengerService } from 'src/app/Service Portal/Services/messenger.service';
import { NonVolatileService } from 'src/app/Service Portal/Services/non-volatile.service';


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  MyName="Hello Wolrd"
  MyDataArray:any = [];

  constructor(
    private _DataService:DataServiceService,
    private _Router:Router,
    private _MessengerService:MessengerService,
    private _NonVolatileService:NonVolatileService
  ) { }

  ngOnInit(): void {
    this.bringDataFromServiceToPCForMyComponent();
  }

  bringDataFromServiceToPCForMyComponent(){
    this.MyDataArray = this._DataService.bringDataFromServiceToPC();
  }

  GoToViewProduct(Id:any){

    this._NonVolatileService.SetDataToLocalStorage(Id);
    this._MessengerService.sendMsgToObserver({Id:Id,NewProduct:'yes'});
    this._Router.navigate(['view-cart']);
  }
}

