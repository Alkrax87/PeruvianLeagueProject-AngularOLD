import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-torneo-reservas',
  templateUrl: './torneo-reservas.component.html',
  styleUrls: ['./torneo-reservas.component.css']
})
export class TorneoReservasComponent {
  //Valor recibido para la carga del mainPage
  mainPage:boolean = true;

  constructor(private route: ActivatedRoute){}

  ngOnInit() {
    //Asignamos el valor recibido a la variable mainPage
    this.route.paramMap.subscribe(params => {
      this.mainPage = params.get('mainPage') === 'true'
    });
    console.log('Status mainPage Reservas: ' + this.mainPage);
  }
}
