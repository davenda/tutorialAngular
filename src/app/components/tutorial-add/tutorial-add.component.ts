import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TutorialService } from 'src/app/services/tutorial.service';

@Component({
  selector: 'app-tutorial-add',
  templateUrl: './tutorial-add.component.html',
  styleUrls: ['./tutorial-add.component.css']
})
export class TutorialAddComponent implements OnInit {

  tutorial = {
    'title': '',
    'description': '',
    'publishedStatus': false
  }
  submitted = false;
  constructor(
      private tutorialService: TutorialService,
      private router: Router
    ) { }

  ngOnInit(): void {
  }

  saveTutorial(): void {
    // this.tutorial.publishedStatus = this.tutorial.published as boolean;
    const tutorial2 = {
      'id': 0,
      'title': this.tutorial.title,
      'description': this.tutorial.description,
      'publishedStatus': this.tutorial.publishedStatus as boolean
    }
    console.log(tutorial2);
    
    this.tutorialService
      .createTutorial(tutorial2)
      .subscribe(
        res => {
          this.submitted = true;
          console.log(res)
        }, 
        error => console.log(error));
  }

  newTutorial(){
    this.submitted = false;
    this.tutorial = {
      title: '',
      description: '',
      publishedStatus: false
    };
  }

}
