import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HListTeamsComponent } from './h-list-teams/h-list-teams.component';
import { FormsModule } from '@angular/forms';
import { DataLoadServiceService } from './data-load-service.service';

@NgModule({
  declarations: [
    AppComponent,
    HListTeamsComponent
  ],
  imports: [
    BrowserModule, FormsModule
  ],
  providers: [DataLoadServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
