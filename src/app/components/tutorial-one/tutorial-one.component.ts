import { Route } from '@angular/compiler/src/core';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TutorialService } from 'src/app/services/tutorial.service';

@Component({
  selector: 'app-tutorial-one',
  templateUrl: './tutorial-one.component.html',
  styleUrls: ['./tutorial-one.component.css']
})
export class TutorialOneComponent implements OnInit {

  tutorial: any = {
    id: '',
    title: '',
    description: '',
    publishedStatus: '',
  };
  message = '';
  id!: number;
  constructor(
    private activatedRoute: ActivatedRoute, 
    private tutorialService: TutorialService,
    private router: Router) { }

  ngOnInit(): void {
    this.id = this.activatedRoute.snapshot.params['id'];
    this.tutorialService
      .getOneTutorial(this.id)
      .subscribe(data => this.tutorial = data);
  }

  deleteTutorial(){
    this.tutorialService
      .deleteOneTutorial(this.id)
      .subscribe(() => this.router.navigate(['/tutorials']));
  }

  updateTutorial(){
    this.tutorialService
    .updateTutorial(this.tutorial)
    .subscribe(
      res => {
        console.log(res);
        this.message = 'The tutorial was updated successfully!';
      },
      err => console.log(err)
    );
  }

  updatePublished(value: boolean){
    this.tutorial.publishedStatus = !this.tutorial.publishedStatus;
  }

}
