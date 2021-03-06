import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { isEmpty } from 'rxjs';
import { DataServiceService } from 'src/app/ServicePortal/Services/data-service.service';
import { MessengerService } from 'src/app/ServicePortal/Services/messenger.service';
import { NonVolatileService } from 'src/app/ServicePortal/Services/non-volatile.service';
import { HeaderComponent } from '../header/header.component';

@Component({
  selector: 'app-view-cart',
  templateUrl: './view-cart.component.html',
  styleUrls: ['./view-cart.component.css']
})
export class ViewCartComponent implements OnInit {
  Data: any;
  DataFromMyService: any = [];
  FilteredArray: any = [];
  PublicId: any;
  CartQuantity: any = 0;
  ProductQuantity: any;
  ShowCart: Boolean = false;
  FinalUserCartArray: any = [];
  CartArray: any = [];
  NewCartArray:any =[];  
  SelectedQuantity=0;
  ShowBox:Boolean = false;
  LocalStorageCartArray:any = []
  LocalStorageSpecificArray:any = [];

  constructor(
    private _MessengerService: MessengerService,
    private _DataService: DataServiceService,
    private _NonVolatileService: NonVolatileService,
    private _ToastrService:ToastrService
  ) { }

  ngOnInit(): void {
    this._MessengerService.GetMessageWithData().subscribe(
      (DataComingFromMyMessengerService: any) => {
        this.Data = DataComingFromMyMessengerService;
      }
    )
    this.GetDataFromMyService();
    this.LocalStorageCartArray = this._NonVolatileService.GetProductToLocalStorage();
    if(Object.entries(this.LocalStorageCartArray).length !== 0){
      this.ShowBox = true;
    }
  }

  GetDataFromMyService() {
    this.DataFromMyService = this._DataService.GetData();
    if (this.Data === undefined) {
      const Id = this._NonVolatileService. GetDataFromLocalStorage();
      this.FilteredArray = this.DataFromMyService.filter((Result: any) => { return (Result._id === Id) });
      this.ProductQuantity = this.FilteredArray[0].qty;
      return
    }
    this.FilteredArray = this.DataFromMyService.filter((Result: any) => { return (Result._id === this.Data.Id) });
    this.ProductQuantity = this.FilteredArray[0].qty;
  }


  AddQuantity() {
    this.ShowBox = true;
    let CartObjectPlus = this._NonVolatileService.GetProductToLocalStorage();
    if (this.SelectedQuantity >= this.ProductQuantity) {
      this._ToastrService.error('Not Available Above This Quantity!');
      return
    }

    if(Object.entries(CartObjectPlus).length === 0){ 
      this.CartArray.push(this.FilteredArray[0]);
      this._NonVolatileService.AddProductToLocalStorage(this.CartArray);
      this.Data = undefined;
      this.LocalStorageCartArray = this._NonVolatileService.GetProductToLocalStorage();
      return
    }

    if(Object.entries(CartObjectPlus).length !== 0 && this.Data !== undefined){
      this.NewCartArray.push(this.FilteredArray[0]); 
      CartObjectPlus.forEach((element:any) => {
        this.NewCartArray.push(element);
      });
      this._NonVolatileService.AddProductToLocalStorage(this.NewCartArray);
      this.Data = undefined;
      this.LocalStorageCartArray = this._NonVolatileService.GetProductToLocalStorage();
      return
    }

      CartObjectPlus.map((element:any) => { 
        if(this.FilteredArray[0]._id === element._id){ 
          element.NewQuantity++;
          this.SelectedQuantity++; 
        }
       });
       this._NonVolatileService.AddProductToLocalStorage(CartObjectPlus);
       this._NonVolatileService.SetUserMiscellaneousInformation(this.CartQuantity);
       this.LocalStorageCartArray = this._NonVolatileService.GetProductToLocalStorage();
  }

  SubQuantity() {

    let CartObjectPlus = this._NonVolatileService.GetProductToLocalStorage();
    if (this.SelectedQuantity <= 0) {
      return
    }

    CartObjectPlus.map((element:any) => {
      if(this.FilteredArray[0]._id === element._id){
        element.NewQuantity--;
        this.SelectedQuantity--;
      }
     });
     this._NonVolatileService.AddProductToLocalStorage(CartObjectPlus);
     this._NonVolatileService.SetUserMiscellaneousInformation(this.CartQuantity);
  }
}
