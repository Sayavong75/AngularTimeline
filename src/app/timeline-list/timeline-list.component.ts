import { Component, OnInit } from '@angular/core';
import { TimelinedataService } from '../timelinedata.service';
import { CardInterface } from '../card-interface';
import { TimelineInterface } from '../timeline-interface';

@Component({
  selector: 'app-timeline-list',
  templateUrl: './timeline-list.component.html',
  styleUrls: ['./timeline-list.component.css']
})
export class TimelineListComponent implements OnInit {

  timelineList :TimelineInterface [] = this.timeLineDataService.timelineList;

  
  //console.log(timelineList.name);


  constructor(
    private timeLineDataService: TimelinedataService
  ) { }

  ngOnInit() {
    console.log(this.timelineList);
  }

}
