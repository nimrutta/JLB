import 'rxjs/add/operator/switchMap';
import { Component, OnInit, EventEmitter } from '@angular/core';
import {Headers,RequestOptions, Http, Response} from '@angular/http';
import { FileUploader,FileItem,ParsedResponseHeaders } from 'ng2-file-upload';

import { Location } from '@angular/common';

import { Blogpost } from '../../blogpost';
import { BlogpostService } from '../../core/blogpost.service';

import { Observable } from 'rxjs/Observable';

function readBase64(file): Promise<any> {
  var reader  = new FileReader();
  var future = new Promise((resolve, reject) => {
    reader.addEventListener("load", function () {
      resolve(reader.result);
    }, false);

    reader.addEventListener("error", function (event) {
      reject(event);
    }, false);

    reader.readAsDataURL(file);
  });
  return future;
}

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})

export class BlogComponent implements OnInit {


  post: any = { }

  blogpost:any = {topic_id: 4}

 

  constructor(private blogpostService: BlogpostService,
              private http: Http
             ) {
                this.uploader.onSuccessItem = (item:FileItem, response:string, status:number, headers:ParsedResponseHeaders) => {
                console.log("onSuccessItem " + status, item);
              }
              }

  public uploader:FileUploader = new FileUploader({url:'http://api.jualishebora.gq/api/v1/images' /*http://localhost:3001/upload*/});

  apiEndPoint: 'http://api.jualishebora.gq/api/v1/images';



  fileToUpload: File = null;

  handleFileInput(files: FileList) {
    this.fileToUpload = files.item(0);
   // this.uploadFileToActivity();
}


uploadFileToActivity() {
  this.blogpostService.postFile(this.fileToUpload).subscribe(data => {
    // do something, if upload success
    }, error => {
      console.log(error);
    });
}



  DocUpload(env) {
    console.log(env);
  }




  /*
  * receives data via event emmiter from upload image component and initializes image_id property
  * */
  initializeImageId(event){
    this.blogpost.image_id = event.id;
  }


  ngOnInit() {
  }


  save(): void {
    this.blogpostService.update(this.post)
  }

  add():void {
    console.log(this.blogpost.title)
    if (!this.blogpost.title) { return; }
    this.blogpostService.create(this.blogpost)
            }


  fileselect(event: EventEmitter<File[]>) {

    const file: File = event[0];

    console.log(file);

    readBase64(file)
      .then(function(data) {
      console.log(data);
    })

            }


          //   fileChange(event) {
          //     let fileList: FileList = event.target.files;
          //     if(fileList.length > 0) {
          //         let file: File = fileList[0];
          //         let formData:FormData = new FormData();
          //         formData.append('uploadFile', file, file.name);
          //         let headers = new Headers();
          //         /** In Angular 5, including the header Content-Type can invalidate your request */
          //         headers.append('Content-Type', 'multipart/form-data');
          //         headers.append('Accept', 'application/json');
          //         let options = new RequestOptions({ headers: headers });
          //         this.http.post('http://api.jualishebora.ga/api/v1/images', formData, options)
          //             .map(res => res.json())
          //             .catch(error => Observable.throw(error))
          //             .subscribe(
          //                 data => console.log('success'),
          //                 error => console.log(error)
          //             )
          //     }

          //     console.log(event.target.value)
          // }


          //public uploader:FileUploader = new FileUploader({url: URL});
          public hasBaseDropZoneOver:boolean = false;
          public hasAnotherDropZoneOver:boolean = false;
        
          public fileOverBase(e:any):void {
            this.hasBaseDropZoneOver = e;
          }
        
          public fileOverAnother(e:any):void {
            this.hasAnotherDropZoneOver = e;
          }

}
