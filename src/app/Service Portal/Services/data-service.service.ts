import { Injectable } from '@angular/core';
import  Database  from '../DB/Database.json';

@Injectable({
  providedIn: 'root'
})
export class DataServiceService {

  dataFromDBSource = Database;
  constructor() { }

  bringDataFromServiceToPC(){
    return this.dataFromDBSource;
  }
}
