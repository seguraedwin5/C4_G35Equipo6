import { Component, Directive, OnInit, QueryList, ViewChildren } from '@angular/core';
import { Dropdown } from 'materialize-css';
import { Carousel } from 'materialize-css';
@Directive({ selector: '.carousel' })
class MyCarousel{}

@Component({
  selector: 'app-buscar-vehiculo',
  templateUrl: './buscar-vehiculo.component.html',
  styleUrls: ['./buscar-vehiculo.component.css']
})
export class BuscarVehiculoComponent implements OnInit {
  
  constructor() { }

  ngOnInit(): void {
    
    

    let elems = document.querySelectorAll('.carousel');
    let instance = Carousel.init(elems)
  }
  
}
