import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { TimelineListComponent } from './timeline-list/timeline-list.component';
import {RouterModule} from '@angular/router';
import { CardgameComponent } from './cardgame/cardgame.component';

@NgModule({
  declarations: [
    AppComponent,
    TopBarComponent,
    TimelineListComponent,
    CardgameComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      { path: '', component: TimelineListComponent},
      { path: 'game', component: CardgameComponent},
      ]

    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
