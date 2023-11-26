import { Component, OnInit } from '@angular/core';
import { DataLoadServiceService } from '../data-load-service.service';

@Component({
  selector: 'app-h-list-teams',
  templateUrl: './h-list-teams.component.html',
  styleUrls: ['./h-list-teams.component.css']
})
export class HListTeamsComponent implements OnInit {

  constructor(private dataLoadService: DataLoadServiceService){}

  data:any;

  ngOnInit() {
    this.loadData();
  }

  loadData() {
    this.dataLoadService.loadData().then((data: any) => {
      this.data = data;
    }).catch(error => {
      console.error('Error al cargar datos en el componente:', error);
    });
  }
}