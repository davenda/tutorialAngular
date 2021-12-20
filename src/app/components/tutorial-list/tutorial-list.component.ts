import { Component, OnInit } from '@angular/core';
import { TutorialService } from 'src/app/services/tutorial.service';

@Component({
  selector: 'app-tutorial-list',
  templateUrl: './tutorial-list.component.html',
  styleUrls: ['./tutorial-list.component.css']
})
export class TutorialListComponent implements OnInit {

  tutorials: any | undefined;
  title: any = '';
  currentIndex!: number;
  currentTutorial: any= {
    id: 0,
    title: '',
    description: '',
    publishedStatus: false
  }


  constructor(private tutorialService: TutorialService) { 
    
  }

  ngOnInit(): void {
    this.getAllTutorials();
  }

  getAllTutorials(): void {
    this.tutorialService
      .getAllTutorials()
      .subscribe(data => this.tutorials = data);
  }

  removeAllTutorials(): void {
    this.tutorialService
      .deleteAllTutorials()
      .subscribe(res =>  this.tutorials = res);
  }

  searchTitle(): void{
      this.tutorialService
        .searchByTitle(this.title)
        .subscribe(res => this.tutorials = res);
  }

  setActiveTutorial(tutorial: any, index: number): void {
    this.currentTutorial = tutorial;
    this.currentIndex = index;
  }

  refreshList(): void {
    this.getAllTutorials();
    this.currentTutorial = null;
    this.currentIndex = -1;
  }

}
