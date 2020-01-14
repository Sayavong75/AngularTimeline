import { Component, OnInit } from '@angular/core';
import { TimelinedataService } from '../timelinedata.service';
import { CardInterface } from '../card-interface';
import { TimelineInterface } from '../timeline-interface';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'app-timeline-list',
  templateUrl: './timeline-list.component.html',
  styleUrls: ['./timeline-list.component.css']
})
export class TimelineListComponent implements OnInit {

  timelineList: TimelineInterface[];
  
  // constructor(
  //   private timeLineDataService: TimelinedataService
  // ) { }
  constructor(private httpClient: HttpClient,
    private timeLineDataService : TimelinedataService) {
     
    this.getTimeLineTest();
  }

  ngOnInit() {} 
  
  getTimeLineTest() {
    this.httpClient.get<TimelineInterface[]>('http://localhost:8080/api/timeline').subscribe(
      value => this.timelineList = value
      );
  }

  // getTimeLineList (){
  //   return this.timeLineDataService.getTimeLineTest().pipe(tap(value => this.timelineList = value)).subscribe;
  //   console.log(this.timelineList);
  // }

}
