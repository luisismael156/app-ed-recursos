import { Injectable, NgZone } from '@angular/core';
import { Network, ConnectionStatus } from '@capacitor/network';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NetworkService {
  _networkStatus!: boolean;
  networkStatus$!: Observable<boolean>;

  constructor(private ngZone: NgZone) { }
  
  get networkStatus(): boolean {
    return this._networkStatus;
  }
  set networkStatus(value: boolean) {
    this._networkStatus = value;
  }
  async initNetworkStatus() {
    this._networkStatus = await this.getNetworkStatus();
    this.initializeNetworkObservable();
    console.log(this._networkStatus, "Estado Inicial")
  }

  initializeNetworkObservable() {
    this.networkStatus$ = new Observable((observer) => {
      Network.addListener('networkStatusChange', (status: ConnectionStatus) => {
        this.ngZone.run(() => {
          observer.next(!!status.connected);
        });
      });
    });
  }



  async getNetworkStatus(): Promise<boolean> {
    const status = await Network.getStatus();
    if (status.connected) {
      return true;
    } else {
      return false;
    }
  }
}
