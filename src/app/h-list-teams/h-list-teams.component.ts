import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-h-list-teams',
  templateUrl: './h-list-teams.component.html',
  styleUrls: ['./h-list-teams.component.css']
})
export class HListTeamsComponent {
  // Iterador de los JSON
  division:number = 1;
  // Variable para almacenar los datos
  data: any;

  ngOnInit() {
    this.loadData();
  }

  // Llamado al JSON respectivo
  loadData() {
    let jsonFileName = this.getJsonFileName();

    fetch('./assets/json/' + jsonFileName + '.json').then(response => response.json()).then(data => {
      this.data = data;
    })
    .catch(error => {
      console.error('Error al cargar el archivo JSON:', error);
    });
  }

  // Iterador de opciones
  getJsonFileName(): string {
    switch (this.division) {
      case 0:
        return 'None';
      case 1:
        return 'liga1';
      case 2:
        return 'liga2';
      case 3:
        return 'liga3';
      case 4:
        return 'copa-peru';
      case 5:
        return 'eliminatorias';
      default:
        return 'None';
    }
  }
}