import { Component } from '@angular/core';
import { DataLoadServiceService } from '../data-load-service.service';

@Component({
  selector: 'app-liga1-tabla',
  templateUrl: './liga1-tabla.component.html',
  styleUrls: ['./liga1-tabla.component.css']
})
export class Liga1TablaComponent {
  constructor(private dataLoadService: DataLoadServiceService){}

  ngOnInit() {
    this.loadData();
  }

  // Cargar Data del JSON
  data:any;
  loadData() {
    this.dataLoadService.loadData(1).then((data: any) => {
      this.data = data;
    }).catch(error => {
      console.error('Error al cargar datos en el componente:', error);
    });
  }

  //Table Status
  table1:boolean = false;
  table2:boolean = false;
  table3:boolean = true;

  // Guardar el estado de la tabla seleccioada
  activeButton: number | null = 1;

  // Funcion para el cambiar de tablas
  tableSwitch(value: number): void {
    if (this.activeButton === value) {
      this.activeButton = null; // Desactiva el botón si ya está activo
    } else {
      this.activeButton = value;
    }
    this.table1 = value === 2;
    this.table2 = value === 3;
    this.table3 = value === 1;
  }
}