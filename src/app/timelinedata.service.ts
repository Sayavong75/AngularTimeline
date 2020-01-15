import { Injectable } from '@angular/core';
import { TimelineInterface } from './timeline-interface';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TimelinedataService {

  timelineList: TimelineInterface[];

  // Création d'une instance httpClient qui permet de faire des requêtes au serveur
  constructor(private httpClient: HttpClient) {
  }
  
  // Création de la méthode pour accéder à la base Timeline du serveur
  // Retour d'un Observable
  getTimeLineList(): Observable<TimelineInterface[]> {
    return this.httpClient.get<TimelineInterface[]>('http://localhost:8080/api/timeline'); 
  }

// @Injectable()
// export class DataService {
//   constructor(protected http: HttpClient) {}

//   public getArticles(): Observable<Article[]> {
//     return this.http.get('http://localhost:3000/articles/').pipe(
//       map(
//         (jsonArray: Object[]) => jsonArray.map(jsonItem => Article.fromJson(jsonItem))
//       )
//     );
//   }
// }


}
