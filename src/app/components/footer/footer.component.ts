import { Component, OnInit } from '@angular/core';
import { InfomationService } from 'src/app/services/infomation.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html'
})
export class FooterComponent implements OnInit {
  anio:number = new Date().getFullYear();
  constructor(private informationService: InfomationService) { }

  ngOnInit() {
  }

}
