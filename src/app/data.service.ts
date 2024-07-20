import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private dataUsage$ = new BehaviorSubject<any>({
    streaming: 30,
    download: 20,
    upload: 15,
    web: 25,
    social: 10,
    gaming: 5,
    others: 5
  });

  getDataUsage() {
    return this.dataUsage$.asObservable();
  }
}
