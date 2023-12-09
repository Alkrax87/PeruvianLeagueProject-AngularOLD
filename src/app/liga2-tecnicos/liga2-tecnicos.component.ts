import { Component } from '@angular/core';
import { DataLoadServiceService } from '../data-load-service.service';

@Component({
  selector: 'app-liga2-tecnicos',
  templateUrl: './liga2-tecnicos.component.html',
  styleUrls: ['./liga2-tecnicos.component.css']
})
export class Liga2TecnicosComponent {
  constructor(private dataLoadService: DataLoadServiceService){}

  ngOnInit() {
    this.loadData();
  }

  //Cargar Data del JSON
  data:any;
  loadData() {
    this.dataLoadService.loadData(1).then((data: any) => {
      this.data = data;
    }).catch(error => {
      console.error('Error al cargar datos en el componente:', error);
    });
  }
}