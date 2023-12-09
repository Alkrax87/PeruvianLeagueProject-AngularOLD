import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataLoadServiceService } from '../data-load-service.service';

@Component({
  selector: 'app-liga2',
  templateUrl: './liga2.component.html',
  styleUrls: ['./liga2.component.css']
})
export class Liga2Component {
  //Valor que se envia para la gestion de la data (JSON)
  value:number = 2;

  //Valor recibido para la carga del mainPage
  mainPage:boolean = true;

  constructor(private route: ActivatedRoute, private dataLoadService: DataLoadServiceService){}

  ngOnInit() {
    //Asignamos el valor recibido a la variable mainPage
    this.route.paramMap.subscribe(params => {
      this.mainPage = params.get('mainPage') === 'true'
    });
    this.loadData();
  }

  //Cargar Data del JSON
  data:any;
  loadData() {
    this.dataLoadService.loadData(this.value).then((data: any) => {
      this.data = data;
    }).catch(error => {
      console.error('Error al cargar datos en el componente:', error);
    });
  }

  //Seleccion de mapa
  mapVisibility: boolean = false;
  regionSelected: string = '';
  teamsSelected: any[] = []; // Array para almacenar múltiples equipos

  mostrar = (region: string) => {
    this.mapVisibility = true;
    this.regionSelected = region;
    this.teamsSelected = [];
    for (let i = 0; i < this.data.Teams.length; i++) {
      const item = this.data.Teams[i];
      if (region === item.location) {
        this.teamsSelected.push({ image: item.image });
      }
    }
  };
  ocultar(){
    this.mapVisibility = false;
    this.regionSelected = '';
  }
}