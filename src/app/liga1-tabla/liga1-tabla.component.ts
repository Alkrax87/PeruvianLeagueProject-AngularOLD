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

  data:any;  // Cargar Data del JSON
  apertura:any; // Data apertura ordenada
  clausura:any; // Data clausura ordenada
  acumulado:any;

  loadData() {
    this.dataLoadService.loadData(1).then((data: any) => {
      this.data = data;
      let dataApertura = [...data.Teams];
      let dataClausura = [...data.Teams];
      this.apertura = this.sortDataTeamsApertura(dataApertura);
      this.clausura = this.sortDataTeamsClausura(dataClausura);

      //this.acumulado = this.sortDataTeamsAcumulado([...this.apertura], [...this.clausura]);

      console.log(this.apertura);
      console.log(this.clausura);


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

  // Ordenar tabla apertura
  sortDataTeamsApertura(dataA: any) {
    dataA.sort(function(a: { data: { apertura: { pj:number; pg: number; pe: number; pp: number; gf: number; gc: number; puntos:number; dg:string; }; }; },b: { data: { apertura: { pj:number; pg: number; pe: number; pp: number; gf: number; gc: number; puntos:number; dg:string; }; }; }) {
      // Criterio puntaje
      let pointsTeamA = (a.data.apertura.pg * 3) + a.data.apertura.pe;
      let pointsTeamB = (b.data.apertura.pg * 3) + b.data.apertura.pe;
      a.data.apertura.puntos = pointsTeamA;
      b.data.apertura.puntos = pointsTeamB;
      // Criterio diferencia de gol
      let goalDifferenceA = a.data.apertura.gf - a.data.apertura.gc;
      let goalDifferenceB = b.data.apertura.gf - b.data.apertura.gc;
      a.data.apertura.dg = goalDifferenceA > 0 ? "+"+goalDifferenceA : String(goalDifferenceA);
      b.data.apertura.dg = goalDifferenceB > 0 ? "+"+goalDifferenceB : String(goalDifferenceB);
      // Criterio foles a favor
      let goalsA = a.data.apertura.gf;
      let goalsB = b.data.apertura.gf;

      a.data.apertura.pj = a.data.apertura.pg + a.data.apertura.pe + a.data.apertura.pp;
      b.data.apertura.pj = b.data.apertura.pg + b.data.apertura.pe + b.data.apertura.pp;

      // Ordenamiento
      if (pointsTeamB !== pointsTeamA) {
        return pointsTeamB - pointsTeamA;
      } else if (goalDifferenceB !== goalDifferenceA) {
        return goalDifferenceB - goalDifferenceA;
      } else {
        return goalsB - goalsA;
      }
    });
    return dataA;
  }

  // Ordenar tabla clausura
  sortDataTeamsClausura(dataC: any) {
    dataC.sort(function(a: { data: { clausura: { pj:number; pg: number; pe: number; pp: number; gf: number; gc: number; puntos:number; dg:string; }; }; },b: { data: { clausura: { pj:number; pg: number; pe: number; pp: number; gf: number; gc: number; puntos:number; dg:string; }; }; }) {
      // Criterio puntaje
      let pointsTeamA = (a.data.clausura.pg * 3) + a.data.clausura.pe;
      let pointsTeamB = (b.data.clausura.pg * 3) + b.data.clausura.pe;
      a.data.clausura.puntos = pointsTeamA;
      b.data.clausura.puntos = pointsTeamB;
      // Criterio diferencia de gol
      let goalDifferenceA = a.data.clausura.gf - a.data.clausura.gc;
      let goalDifferenceB = b.data.clausura.gf - b.data.clausura.gc;
      a.data.clausura.dg = goalDifferenceA > 0 ? "+"+goalDifferenceA : String(goalDifferenceA);
      b.data.clausura.dg = goalDifferenceB > 0 ? "+"+goalDifferenceB : String(goalDifferenceB);
      // Criterio foles a favor
      let goalsA = a.data.clausura.gf;
      let goalsB = b.data.clausura.gf;

      a.data.clausura.pj = a.data.clausura.pg + a.data.clausura.pe + a.data.clausura.pp;
      b.data.clausura.pj = b.data.clausura.pg + b.data.clausura.pe + b.data.clausura.pp;

      // Ordenamiento
      if (pointsTeamB !== pointsTeamA) {
        return pointsTeamB - pointsTeamA;
      } else if (goalDifferenceB !== goalDifferenceA) {
        return goalDifferenceB - goalDifferenceA;
      } else {
        return goalsB - goalsA;
      }
    });
    return dataC;
  }

  /*
  sortDataTeamsAcumulado(dataA: any, dataC: any) {
    // Asegúrate de que ambos arrays tengan la misma longitud
    if (dataA.length !== dataC.length) {
      throw new Error('Los arrays deben tener la misma longitud para fusionar.');
    }
  
    // Fusionar arrays
    let dataFusionada = dataA.map((itemA: { data: { apertura: any; clausura: any; }; id: any; name: any; }, index: string | number) => {
      let itemC = dataC[index];
  
      // Sumar los valores de apertura y clausura
      let apertura = this.sumarValores(itemA.data.apertura, itemC.data.apertura);
      let clausura = this.sumarValores(itemA.data.clausura, itemC.data.clausura);
  
      // Devolver el objeto fusionado
      return {
        id: itemA.id,
        name: itemA.name,
        data: { apertura, clausura }
      };
    });
  
    // Ordenar dataFusionada según tu lógica de clasificación
    // ...
  
    return dataFusionada;
  }
  
  // Función para sumar valores de dos objetos
  sumarValores(obj1: any, obj2: any) {
    return {
      pg: (obj1.pg || 0) + (obj2.pg || 0),
      pe: (obj1.pe || 0) + (obj2.pe || 0),
      pp: (obj1.pp || 0) + (obj2.pp || 0),
      gf: (obj1.gf || 0) + (obj2.gf || 0),
      gc: (obj1.gc || 0) + (obj2.gc || 0)
    };
  }
*/

}