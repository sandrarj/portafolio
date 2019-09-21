import { Component, OnInit } from '@angular/core';
import { InfomationService } from 'src/app/services/infomation.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
  providers: [InfomationService]
})
export class AboutComponent implements OnInit {

  constructor(public informationService: InfomationService) { }

  ngOnInit() {
  }

}
