import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NonVolatileService {

  constructor() { }

  SetDataToLocalStorage(Id:any){
    localStorage.setItem('product-id',JSON.stringify(Id));
  }

  //  bringDataFromServiceToPCFromMyService(){
  //  return JSON.parse(localStorage.getItem('product-id') || '{}');
  //  }

   GetDataFromLocalStorage(): any{
     return JSON.parse(localStorage.getItem('product-id') || '{}') //here its returning the saved data from local storage
  }

  AddProdcutToLocalStorage(Data:any){
    localStorage.setItem('user-cart',JSON.stringify(Data));
  }

  GetProdcutToLocalStorage(){
    return JSON.parse(localStorage.getItem('user-cart') || '{}');
  }

  SetUserMiscellaneousInformation(Quantity:any){
    localStorage.setItem('user-total-quantity',JSON.stringify(Quantity));
  }

  GetUserMiscellaneousInformation(Quantity:any){
    return JSON.parse(localStorage.getItem('user-total-quantity') || '{}');
  }
}
