import { Component, OnInit } from '@angular/core';
import { NetworkService } from '../services/core/network/network.service';

@Component({
  selector: 'app-personalsocial',
  templateUrl: './personalsocial.page.html',
  styleUrls: ['./personalsocial.page.scss'],
})
export class PersonalsocialPage implements OnInit {

  constructor(public serviceNetwork : NetworkService) { }

  ngOnInit() {
    this.serviceNetwork.networkStatus$.subscribe(resp => {
      this.serviceNetwork.networkStatus = resp;
    })
  }

}
