import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { HListTeamsComponent } from './h-list-teams/h-list-teams.component';
import { FormsModule } from '@angular/forms';
import { DataLoadServiceService } from './data-load-service.service';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { Liga1Component } from './liga1/liga1.component';
import { Liga2Component } from './liga2/liga2.component';
import { Liga3Component } from './liga3/liga3.component';
import { CopaPeruComponent } from './copa-peru/copa-peru.component';
import { EliminatoriasComponent } from './eliminatorias/eliminatorias.component';
import { TorneoReservasComponent } from './torneo-reservas/torneo-reservas.component';
import { RouterModule, Routes } from '@angular/router';
import { Liga1ClubesComponent } from './liga1-clubes/liga1-clubes.component';
import { Liga1TablaComponent } from './liga1-tabla/liga1-tabla.component';
import { Liga1TecnicosComponent } from './liga1-tecnicos/liga1-tecnicos.component';
import { Liga2ClubesComponent } from './liga2-clubes/liga2-clubes.component';
import { Liga2TablaComponent } from './liga2-tabla/liga2-tabla.component';
import { Liga2TecnicosComponent } from './liga2-tecnicos/liga2-tecnicos.component';


const appRoutes:Routes=[
  { path:'', component:HomeComponent },
  { path:'liga1', component:Liga1Component, children:[
    {path: 'clubes', component:Liga1ClubesComponent},
    {path: 'tabla', component:Liga1TablaComponent},
    {path: 'tecnicos', component:Liga1TecnicosComponent}
  ] },
  { path:'liga2', component:Liga2Component, children:[
    {path: 'clubes', component:Liga2ClubesComponent},
    {path: 'tabla', component:Liga2TablaComponent},
    {path: 'tecnicos', component:Liga2TecnicosComponent}
  ] },
  { path:'liga3', component:Liga3Component },
  { path:'copa-peru', component:CopaPeruComponent },
  { path:'eliminatorias', component:EliminatoriasComponent },
  { path:'torneo-reservas', component:TorneoReservasComponent },
]

@NgModule({
  declarations: [
    AppComponent,
    HListTeamsComponent,
    NavbarComponent,
    HomeComponent,
    Liga1Component,
    Liga2Component,
    Liga3Component,
    CopaPeruComponent,
    EliminatoriasComponent,
    TorneoReservasComponent,
    Liga1ClubesComponent,
    Liga1TablaComponent,
    Liga1TecnicosComponent,
    Liga2ClubesComponent,
    Liga2TablaComponent,
    Liga2TecnicosComponent,
    TopBarComponent
  ],
  imports: [
    BrowserModule, FormsModule, RouterModule.forRoot(appRoutes)
  ],
  exports: [RouterModule],
  providers: [DataLoadServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
