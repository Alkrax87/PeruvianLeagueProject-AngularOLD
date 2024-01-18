import { Component } from '@angular/core';
import { DataLoadServiceService } from '../data-load-service.service';

@Component({
  selector: 'app-liga2-tabla',
  templateUrl: './liga2-tabla.component.html',
  styleUrls: ['./liga2-tabla.component.css']
})
export class Liga2TablaComponent {
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

  //Table Status
  table1:boolean = false;
  table2:boolean = false;
  table3:boolean = true;

  tableSwitch(value: number): void {
    this.table1 = value === 2;
    this.table2 = value === 3;
    this.table3 = value === 1;
  }
}