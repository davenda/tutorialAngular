import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TutorialService {

  // tutorial: Array<Tutorial> = [];
  constructor(private http: HttpClient) { }

  getOneTutorial(id: number): Observable<Tutorial> {
    return this.http.get<Tutorial>("http://localhost:8080/tutorials/" + id);
  }

  getAllTutorials(): Observable<Tutorial[]>{
    return this.http.get<Tutorial[]>("http://localhost:8080/tutorials");
  }

  deleteOneTutorial(id: number): Observable<Tutorial>{
    return this.http.delete<Tutorial>("http://localhost:8080/tutorials/" + id);
  }

  deleteAllTutorials(): Observable<Tutorial[]>{
    return this.http.delete<Tutorial[]>("http://localhost:8080/tutorials");
  }

  createTutorial(tutorial: Tutorial){
    console.log(tutorial);
    return this.http.post<Tutorial>("http://localhost:8080/tutorials", tutorial);
  }

  searchByTitle(title: string){
    console.log(title);
    return this.http.get<Tutorial>("http://localhost:8080?title=" + title);
  }

  updateTutorial(tutorial: Tutorial) {
    console.log(tutorial);
    return this.http.put<Tutorial>("http://localhost:8080/tutorials/" + tutorial.id, tutorial);
  }
}
interface Tutorial {
  id: number;
  title: string;
  description: string;
  publishedStatus: boolean;
}