import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { Filesystem, Directory, Encoding } from '@capacitor/filesystem';
import { ConnectionStatus, Network } from '@capacitor/network';
import { LoadingController } from '@ionic/angular';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  networkStatusSubscription!: Subscription;
  networkStatus: string = 'offline';
  scormContent: SafeHtml | null = null;

  constructor(private loadingController: LoadingController, private sanitizer: DomSanitizer) {
    console.log(Directory.Documents);
    this.initNetworkStatus();
    this.loadScormContent();
  }




  async loadScormContent() {
    const scormPath = 'assets/scorm/personalsocial/genially.html';

    try {
      const response = await fetch(scormPath);
     
      const scormHtml = await response.text();
      console.log(scormHtml, "CONTENIDO SCROM")
      this.scormContent = this.sanitizer.bypassSecurityTrustHtml(scormHtml);
    } catch (error) {
      console.error('Error loading SCORM content:', error);
    }
  }



  initNetworkStatus() {
    Network.addListener('networkStatusChange', (status) => {
      this.networkStatus = status.connected ? 'online' : 'offline';
      console.log(this.networkStatus)
    });
  }

  ngOnInit(): void {
    if (Network) {
      Network.getStatus().then((status) => {
        if (!status.connected) {
          this.downloadAndOpenFile();
        }
      })
    }
  }
  async downloadAndOpenFile() {
    const loading = await this.loadingController.create({
      message: 'Descargando recursos',
    });


    try {
      loading.present().then(resp => {
        console.log("presente");
      });

      const fileUrl = 'https://educared.fundaciontelefonica.com.pe/wp-content/uploads/buddypress/groups/21/cover-image/63540f78eb0ad-bp-cover-image.png'; // URL of the remote file
      const fileName = 'file.png';
      const downloadDirectory = Directory.Data; // Choose appropriate directory
      const myHeaders = new Headers({
        "Access-Control-Allow-Origin": "http://localhost:8101",
        "Access-Control-Allow-Credentials": "true",
        "Access-Control-Allow-Methods": "GET,POST, OPTIONS",
        "Access-Control-Allow-Headers": "Origin, X-Api-Key, X-Requested-With, Content-Type, Accept, Authorization",

      });
      // Download the file
      const response = await fetch(fileUrl);
      const fileData = await response.blob();

      // Save the file to app storage
      const writeFileResult = await Filesystem.writeFile({
        path: `${downloadDirectory}/${fileName}`,
        data: fileData,
        directory: downloadDirectory,
        encoding: Encoding.UTF8,
      });

      console.log('File downloaded and saved:', writeFileResult.uri);

      // Open the downloaded file using WebView
      const openFileResult = await Filesystem.getUri({
        directory: downloadDirectory,
        path: fileName,
      });
      console.log(openFileResult.uri, "ARCHIVO ENCONTRADO")
      const fileUri = openFileResult.uri;
    } catch (error) {
      console.error('Error:', error);
    } finally {
      loading.dismiss().then(res => {
        console.log("cerrados")
      });
    }
  }

}
