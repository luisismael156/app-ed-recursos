import { Component } from '@angular/core';
import { NetworkService } from './services/core/network/network.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor(private serviceNetwork : NetworkService) {
    this.serviceNetwork.initNetworkStatus();
  }
}
