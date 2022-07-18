import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NonVolatileService {

  constructor() { }

  SaveDataToLocalStorage(_id:any){
    localStorage.setItem('product-id',JSON.stringify(_id)); //here it saves the card's id(s) into local storage
  }

  GetDataFromLocalStorage(): any{
    return JSON.parse(localStorage.getItem('product-id') || '{}') //here its returning the saved data from local storage
  }

  AddProductToLocalStorage(Data:any){
    localStorage.setItem('user-cart',JSON.stringify(Data)); //here its saving data of cards into local storage
  }

  GetProductToLocalStorage(){
    return JSON.parse(localStorage.getItem('user-cart') || '{}') //here its returning  the saved card's data from local storage
  }

  SetUserMiscellaneousInformation(Quantity:any){
    localStorage.setItem('user-total-quantity',JSON.stringify(Quantity)); //here it saving the total selected quantity of cart
  }
  
  GetUserMiscellaneousInformation(Quantity:any){
    return JSON.parse(localStorage.getItem('user-total-quantity') || '{}'); //here it returns total selected cart quantity
  }
}
