import { Component, OnInit } from '@angular/core';
import { FileHolder } from 'angular2-image-upload/src/image-upload/image-upload.component'

@Component({
  selector: 'app-uploadimage',
  templateUrl: './uploadimage.component.html',
  styleUrls: ['./uploadimage.component.css']
})
export class UploadimageComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  
  imageUploaded(file: FileHolder) {
  console.log(JSON.stringify(file.serverResponse));
}

  imageRemoved(file: FileHolder) {
  // do some stuff with the removed file.
}

  disableSendButton(state: boolean) {
  console.log(JSON.stringify(state));
}
}
