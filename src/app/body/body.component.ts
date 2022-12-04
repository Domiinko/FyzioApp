import { Component, OnInit } from '@angular/core';
import {FyzioDataService} from "../fyzio-data.service";
import {BehaviorSubject, map, Observable, take} from "rxjs";
import {BandData, RingData} from '../interfaces/main_interface';


@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit {
  fyzioData: any;
  fyzioData$: any;

  "jano-fero": any;

  private bandPhysioData$$: BehaviorSubject<BandData[] | undefined> =new BehaviorSubject<BandData[] | undefined>([] );
  readonly bandPhysioData$: Observable<BandData[] | undefined> =this.bandPhysioData$$.asObservable();

  private ringPhysioData$$: BehaviorSubject<RingData[]> =new BehaviorSubject<RingData[]>([]);
  readonly ringPhysioData$: Observable<RingData[]> =this.ringPhysioData$$.asObservable();


  private bandActivitiesData$$: BehaviorSubject<any> =new BehaviorSubject<any>(null );
  readonly bandActivitiesData$: Observable<any> =this.bandActivitiesData$$.asObservable();

 /* private ringPhysioData$$: BehaviorSubject<RingData | null> =new BehaviorSubject<RingData | null>(null);
  readonly ringPhysioData$: Observable<RingData | null> =this.ringPhysioData$$.asObservable();*/


  constructor(private fyzioDataService: FyzioDataService) {
  }

  ngOnInit(): void {


    this.fyzioData$ = this.fyzioDataService.getData2().pipe().subscribe((data) => {
      this.fyzioData = data;
    });


    this.fyzioDataService.getBandData().subscribe((result: any)=>{
      console.log(result);
      this.bandActivitiesData$$.next(result);
    })

    this.fyzioDataService.getRingData().subscribe(
      (response)=> {
        this.ringPhysioData$$.next(response);
      }
    );

  }



}
