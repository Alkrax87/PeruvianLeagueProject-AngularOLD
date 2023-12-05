import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-copa-peru',
  templateUrl: './copa-peru.component.html',
  styleUrls: ['./copa-peru.component.css']
})
export class CopaPeruComponent {
  //Valor recibido para la carga del mainPage
  mainPage:boolean = true;

  constructor(private route: ActivatedRoute){}

  ngOnInit() {
    //Asignamos el valor recibido a la variable mainPage
    this.route.paramMap.subscribe(params => {
      this.mainPage = params.get('mainPage') === 'true'
    });
    console.log('Status mainPage copa peru: ' + this.mainPage);
  }
}
