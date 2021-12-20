import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable()

export class SharedDataService {

  private countryName = new BehaviorSubject<string>('India');
  username = this.countryName.asObservable()
  
  
  constructor() { }
  
  changeUsername(countryName: string) {
    this.countryName.next(countryName);
  }
}