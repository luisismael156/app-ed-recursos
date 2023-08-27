import { Component, OnInit } from '@angular/core';
import { NetworkService } from '../services/core/network/network.service';

@Component({
  selector: 'app-comunicaciones',
  templateUrl: './comunicaciones.page.html',
  styleUrls: ['./comunicaciones.page.scss'],
})
export class ComunicacionesPage implements OnInit {

  constructor(public serviceNetwork : NetworkService) { }

  ngOnInit() {
    this.serviceNetwork.networkStatus$.subscribe(resp => {
      this.serviceNetwork.networkStatus = resp;
    })
  }

}
