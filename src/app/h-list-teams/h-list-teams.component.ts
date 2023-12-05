import { Component, Input, OnInit } from '@angular/core';
import { DataLoadServiceService } from '../data-load-service.service';

@Component({
  selector: 'app-h-list-teams',
  templateUrl: './h-list-teams.component.html',
  styleUrls: ['./h-list-teams.component.css']
})
export class HListTeamsComponent implements OnInit {

  @Input() value: number = 0;
  constructor(private dataLoadService: DataLoadServiceService){}

  data:any;

  ngOnInit() {
    if (this.value != 0) {
      this.loadData(this.value);
    }
  }

  loadData(value:number) {
    this.dataLoadService.loadData(value).then((data: any) => {
      this.data = data;
    }).catch(error => {
      console.error('Error al cargar datos en el componente:', error);
    });
  }
}