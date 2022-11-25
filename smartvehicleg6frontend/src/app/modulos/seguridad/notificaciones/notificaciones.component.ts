import { Component, OnInit, ViewChild} from '@angular/core';
import { SwalComponent } from '@sweetalert2/ngx-sweetalert2';


@Component({
  selector: 'app-notificaciones',
  templateUrl: './notificaciones.component.html',
  styleUrls: ['./notificaciones.component.css']
})
export class NotificacionesComponent implements OnInit{
  
  @ViewChild('exitoAlert') notif!:SwalComponent
  ngOnInit(): void {
    
  }

  getAlert() {
    return this.notif
  }
  
}
