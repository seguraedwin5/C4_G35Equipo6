import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  imgCollection: Array<object> = [
    {
      image: '../assets/Imagenes/carro.jpg',
      thumbImage: '../assets/Imagenes/carro.jpg',
      alt: 'Image 1',
      title: 'Carros'
    }, {
      image: '../assets/Imagenes/camioneta.jpg',
      thumbImage: '../assets/Imagenes/camioneta.jpg',
      title: 'Camionetas',
      alt: 'Image 2'
    }, {
      image: '../assets/Imagenes/moto1.jpg',
      thumbImage: '../assets/Imagenes/moto1.jpg',
      title: 'Motos Scooter',
      alt: 'Image 3'
    }, {
      image: '../assets/Imagenes/moto2.jpg',
      thumbImage: '../assets/Imagenes/moto2.jpg',
      title: 'Motos Adventour',
      alt: 'Image 4'
    }
];

}
