import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataLoadServiceService {
  // Iterador de JSON
  division: number = 1;

  // Cargar los datos del JSON
  loadData() {
    return fetch('./assets/json/' + this.getJsonFileName() + '.json').then(response => response.json()).then(data => data || null).catch(error => {
      console.error('Error al cargar el archivo JSON:', error);
      throw error;
    });
  }

  // Cargador del JSON
  getJsonFileName(): string {
    switch (this.division) {
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
        return 'a';
    }
  }
}
