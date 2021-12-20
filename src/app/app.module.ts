import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TutorialListComponent } from './components/tutorial-list/tutorial-list.component';
import { TutorialOneComponent } from './components/tutorial-one/tutorial-one.component';
import { TutorialAddComponent } from './components/tutorial-add/tutorial-add.component';
import { TutorialService } from './services/tutorial.service';
import { HeaderComponent } from './components/header/header.component';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http'
import { NotFoundComponent } from './components/not-found/not-found.component';
import { FormsModule } from '@angular/forms';

const routes: Routes = [
  {
    path: 'add', 
    component: TutorialAddComponent
  },
  {
    path: 'tutorials/:id', 
    component: TutorialOneComponent
  },
  {
    path: 'tutorials', 
    component: TutorialListComponent
  },
  {
    path: '**', 
    component: NotFoundComponent
  }
];
@NgModule({
  declarations: [
    AppComponent,
    TutorialListComponent,
    TutorialOneComponent,
    TutorialAddComponent,
    HeaderComponent,
    NotFoundComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [
    TutorialService
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }
