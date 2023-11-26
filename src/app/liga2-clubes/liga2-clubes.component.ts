import { Component } from '@angular/core';
import { DataLoadServiceService } from '../data-load-service.service';

@Component({
  selector: 'app-liga2-clubes',
  templateUrl: './liga2-clubes.component.html',
  styleUrls: ['./liga2-clubes.component.css']
})
export class Liga2ClubesComponent {

  constructor(private dataLoadService: DataLoadServiceService){}

  data:any;

  ngOnInit() {
    this.loadData();
  }

  loadData() {
    this.dataLoadService.loadData(2).then((data: any) => {
      this.data = data;
    }).catch(error => {
      console.error('Error al cargar datos en el componente:', error);
    });
  }

}
