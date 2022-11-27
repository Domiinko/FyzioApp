import { Component, OnInit } from '@angular/core';
import {FyzioDataService} from "../fyzio-data.service";

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit {
  fyzioData: any;
  constructor(private fyzioDataService: FyzioDataService) { }

  ngOnInit(): void {
   /* this.fyzioDataService.getData().subscribe((data) => {
      this.fyzioData = data;
    });*/
    this.fyzioDataService.getData2().subscribe((data) => {
      this.fyzioData = data;
    });
  }


}
