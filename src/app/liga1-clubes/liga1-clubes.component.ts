import { Component } from '@angular/core';
import { DataLoadServiceService } from '../data-load-service.service';

@Component({
  selector: 'app-liga1-clubes',
  templateUrl: './liga1-clubes.component.html',
  styleUrls: ['./liga1-clubes.component.css']
})
export class Liga1ClubesComponent {

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

  //Efecto hover
  hoveredItem: any;
  onItemHover(item: any) {
    this.hoveredItem = item;
  }
  onItemLeave() {
    this.hoveredItem = null;
  }
}
