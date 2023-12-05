import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

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

  constructor(private route: ActivatedRoute){}

  ngOnInit() {
    //Asignamos el valor recibido a la variable mainPage
    this.route.paramMap.subscribe(params => {
      this.mainPage = params.get('mainPage') === 'true'
    });
  }
}