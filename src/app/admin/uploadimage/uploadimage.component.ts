import {Component, OnInit, Output,EventEmitter} from '@angular/core';
import { FileHolder } from 'angular2-image-upload/src/image-upload/image-upload.component'

@Component({
  selector: 'app-uploadimage',
  templateUrl: './uploadimage.component.html',
  styleUrls: ['./uploadimage.component.css']
})
export class UploadimageComponent implements OnInit {
  /*
  this is how we send data to from child to parent component
  * */
  @Output() onServerResponse: EventEmitter<any> = new EventEmitter<any>();

  constructor() { }

  ngOnInit() {
  }

  imageUploaded(file: FileHolder) {
  console.log(JSON.stringify(file.serverResponse));
}
   /*

   listens to server response, captures images details returned from server
   * */
  onUploadFinished($event){
    /*
    sends image details captured from server response to the blog component
    * */
    this.onServerResponse.emit($event.serverResponse.response.json().data);
  }

  imageRemoved(file: FileHolder) {
  // do some stuff with the removed file.
}

  disableSendButton(state: boolean) {
  console.log(JSON.stringify(state));
}
}
