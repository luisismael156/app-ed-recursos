import { Component, OnInit } from '@angular/core';
import { NetworkService } from '../services/core/network/network.service';

@Component({
  selector: 'app-ciencia',
  templateUrl: './ciencia.page.html',
  styleUrls: ['./ciencia.page.scss'],
})
export class CienciaPage implements OnInit {

  constructor(public serviceNetwork : NetworkService) { }

  ngOnInit() {
    this.serviceNetwork.networkStatus$.subscribe(resp => {
      this.serviceNetwork.networkStatus = resp;
    })
  }

}
