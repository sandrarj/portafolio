import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable({
  providedIn: 'root'
})
export class InfomationService {
  info:any = {};
  load:boolean = false;
  constructor(private Http: Http) {
    this.Http.get("assets/data/info.page.json").subscribe(
      data => {
        console.log( data.json() );
        this.info = data.json();
        this.load = true;
      }
    );
  }

  


}
