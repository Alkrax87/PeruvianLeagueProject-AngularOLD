import { Component } from '@angular/core';
import { DataLoadServiceService } from '../data-load-service.service';

interface DtItem {
  name: string;
  image: string;
  alt: string;
  statusDT: boolean;
  nameDT: string;
  codDT: string;
  countryDT: string;
}

@Component({
  selector: 'app-liga1-tecnicos',
  templateUrl: './liga1-tecnicos.component.html',
  styleUrls: ['./liga1-tecnicos.component.css']
})
export class Liga1TecnicosComponent {
  constructor(private dataLoadService: DataLoadServiceService){}

  ngOnInit() {
    this.loadData();
  }

  // Cargar Data del JSON
  data:any;
  loadData() {
    this.dataLoadService.loadData(1).then((data: any) => {
      this.data = data;
      this.processData(data.Teams);
    }).catch(error => {
      console.error('Error al cargar datos en el componente:', error);
    });
  }

  // Gestionar la información de tecnicos
  dt: DtItem[] = [];
  processData (teams:any[]) {
    for (let item of teams) {
      for (let i = 0; i < item.dt.length; i++) {
        const dtItem: DtItem = {
          name: item.name,
          image: item.image,
          alt: item.alt,
          statusDT: item.dt[i].status,
          nameDT: item.dt[i].name,
          codDT: item.dt[i].cod,
          countryDT: item.dt[i].country
        };
        this.dt.push(dtItem);
      }
    }
  }
}