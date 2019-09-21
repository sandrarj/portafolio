import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable({
  providedIn: 'root'
})
export class InfomationService {
  info:any = {};
  load:boolean = false;
  loadAbout:boolean = false;
  equipo:any[] = [];
  constructor(private Http: Http) {
    this.cargar_info();
    this.cargar_sobre_nosotros();
  }
  
  cargar_info(){
    this.Http.get("assets/data/info.page.json").subscribe(
      data => {
        console.log( data.json() );
        this.info = data.json();
        this.load = true;
      }
    );
  }
  cargar_sobre_nosotros(){
    this.Http.get("https://noteionic-be69e.firebaseio.com/equipo.json").subscribe(
      data => {
        console.log( data.json() );
        this.equipo = data.json();
        this.loadAbout = true;
      }
    );
    //podemos guardar en localstorage , en caso que la pagina se recargue
  }


}
