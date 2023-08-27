import { Component, OnInit } from '@angular/core';
import { NetworkService } from '../services/core/network/network.service';

@Component({
  selector: 'app-matematica',
  templateUrl: './matematica.page.html',
  styleUrls: ['./matematica.page.scss'],
})
export class MatematicaPage implements OnInit {

  constructor(public serviceNetwork : NetworkService) { }

  ngOnInit() {
    this.serviceNetwork.networkStatus$.subscribe(resp => {
      this.serviceNetwork.networkStatus = resp;
    })
  }

}
