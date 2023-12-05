import { Component } from '@angular/core';
import { DataLoadServiceService } from '../data-load-service.service';

@Component({
  selector: 'app-liga2-clubes',
  templateUrl: './liga2-clubes.component.html',
  styleUrls: ['./liga2-clubes.component.css']
})
export class Liga2ClubesComponent {

  constructor(private dataLoadService: DataLoadServiceService){}

  ngOnInit() {
    this.loadData();
  }

  //Cargar Data del JSON
  data:any;
  loadData() {
    this.dataLoadService.loadData(2).then((data: any) => {
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
