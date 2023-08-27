import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { Filesystem, Directory, Encoding } from '@capacitor/filesystem';
import { ConnectionStatus, Network } from '@capacitor/network';
import { LoadingController } from '@ionic/angular';
import { Subscription } from 'rxjs';
import { NetworkService } from '../services/core/network/network.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  network!: boolean;

  constructor(public serviceNetwork: NetworkService) {
  }

  ngOnInit(): void {
    this.serviceNetwork.networkStatus$.subscribe(resp => {
      this.serviceNetwork.networkStatus = resp;
    })

  }


}
