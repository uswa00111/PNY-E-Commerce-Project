import { Component, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { DataServiceService } from 'src/app/ServicePortal/Services/data-service.service';
import { MessengerService } from 'src/app/ServicePortal/Services/messenger.service';
import { NonVolatileService } from 'src/app/ServicePortal/Services/non-volatile.service';


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  MyDataArray:any = [];

  constructor(
    private _DataService:DataServiceService,
    private _Router:Router,
    private _MessengerService:MessengerService,
    private _NonVolatileService:NonVolatileService
  ) { }

  ngOnInit(): void {
    this.GetDataForMyComponent();
  }

  GetDataForMyComponent(){
    this.MyDataArray = this._DataService.GetData();
  }

  GoToViewProduct(_Id:any){

    this._NonVolatileService.SaveDataToLocalStorage(_Id);
    this._MessengerService.SendMessageWithData(_Id);
    this._Router.navigate(['view-cart']);
  }
}

