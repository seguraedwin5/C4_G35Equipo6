import { Element } from '@angular/compiler';
import { AfterViewInit, Component, Directive, ElementRef, OnInit, QueryList, ViewChildren } from '@angular/core';
import { Dropdown } from 'materialize-css';
import { Carousel } from 'materialize-css';
@Directive({ selector: '.carousel' })
class MyCarousel{}

@Component({
  selector: 'app-buscar-vehiculo',
  templateUrl: './buscar-vehiculo.component.html',
  styleUrls: ['./buscar-vehiculo.component.css']
})
export class BuscarVehiculoComponent implements AfterViewInit {
  @ViewChildren('carousel') elems!: QueryList<'carousel'>;

  constructor() { }
  ngAfterViewInit(): void {
    this.elems.forEach((carousel)=>console.log(carousel))
  }

 
  
  
  
}
