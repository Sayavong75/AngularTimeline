import { Component, OnInit } from '@angular/core';
import { TimelinedataService } from '../timelinedata.service';
import { TimelineInterface } from '../timeline-interface';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-timeline-list',
  templateUrl: './timeline-list.component.html',
  styleUrls: ['./timeline-list.component.css']
})
export class TimelineListComponent implements OnInit {

  // Création d'une variable timelineList qui sera un observable et qui reçoit l'observable du service
  timelineList: Observable<TimelineInterface[]>;
  timeline : TimelineInterface;

  // Alimentation de la liste des timeline avec le retour "observable" du service
  constructor(private timeLineDataService : TimelinedataService) {
    this.timelineList = timeLineDataService.getTimeLineList();

  }

  ngOnInit() {
  } 
  
  // EXEMPLE AVEC LA METHODE .SUBSCRIBE
  // getTimeLineList() {
  //   this.httpClient.get<TimelineInterface[]>('http://localhost:8080/api/timeline').subscribe(
  //     value => this.timelineList = value
  //     );
  // }

  getId(timelineId) {
    console.log("get Id : " + timelineId);
    return timelineId;
  }

  onDeleteTimeline(timelineId) {
    // Appel le service pour supprimer le table timeline du serveur
    // Si le delete est OK on rappelle la liste des timelines de la table
    // On refait un subscribe pour s'assurer de l'intégralité de la table
    // Le retour effectif de la méthode timeLineDataService.delTimelineList est void qui permet de déclencher la suite de l'action
    console.log(timelineId);
    this.timeLineDataService.delTimelineList(timelineId).subscribe( ()  => this.timelineList = this.timeLineDataService.getTimeLineList());
  }

}
