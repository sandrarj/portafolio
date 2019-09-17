import { Component, OnInit } from '@angular/core';
import { InfomationService } from 'src/app/services/infomation.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent implements OnInit {

  constructor(private informationService: InfomationService) { 

  }

  ngOnInit() {

  }

}
