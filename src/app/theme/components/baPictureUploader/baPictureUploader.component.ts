import { Component, ViewChild, Input, Output, EventEmitter, ElementRef, Renderer } from '@angular/core';
import { NgUploaderOptions } from 'ngx-uploader';
import { UserDataService } from '../../../services/userdata.service';
import { UserClass } from '../../../models/user-class';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'ba-picture-uploader',
  styleUrls: ['./baPictureUploader.scss'],
  templateUrl: './baPictureUploader.html',
})
export class BaPictureUploader {

  @Input() defaultPicture: string = '';
  @Input() picture: string = '';

  @Input() uploaderOptions: NgUploaderOptions = { url: '' };
  @Input() canDelete: boolean = true;

  @Output() onUpload = new EventEmitter<any>();
  @Output() onUploadCompleted = new EventEmitter<any>();

  @ViewChild('fileUpload') _fileUpload: ElementRef;

  uploadInProgress: boolean;
  uploaded: any;
  files: any;
  user: UserClass;
  subscription: Subscription;
  
  constructor(private renderer: Renderer, private uds: UserDataService) {
    /*this.subscription = this.uds.getUser('baPictireUploader').subscribe(
      payload => { 
        this.user = payload.user.data; 
        console.log(`baPictureUploader user: ${JSON.stringify(this.user)}`);
      },
      error => {
        console.log(`Error getting user data fro UDS - ${error}`);
      });*/
  }

  beforeUpload(uploadingFile): void {
    this.files = this._fileUpload.nativeElement.files;
    console.log(`files.length: ${this.files.length}`);    
    if (this.files.length > 0) {
      const file = this.files[0];
      this.uploaded = file;
      this._changePicture(file);

      if (!this._canUploadOnServer()) {
        uploadingFile.setAbort();
      } else {
        this.uploadInProgress = true;
      }
    }
  }

  bringFileSelector(): boolean {
    this.renderer.invokeElementMethod(this._fileUpload.nativeElement, 'click');
    return false;
  }

  removePicture(): boolean {
    this.picture = '';
    return false;
  }

  _changePicture(file: File): void {
    const reader = new FileReader();
    reader.addEventListener('load', (event: Event) => {
      this.picture = (<any> event.target).result;
      console.log(`event: ${JSON.stringify(event)}`); 
    }, false);
    console.log(`file: ${JSON.stringify(this.picture)}`);    
    reader.readAsDataURL(file);
  }

  _onUpload(data): void {
    if (data['done'] || data['abort'] || data['error']) {
      this._onUploadCompleted(data);
      console.log(`_onUpload data ${JSON.stringify(data)}`);                        
    } else {
      this.onUpload.emit(data);
    }
  }

  _onUploadCompleted(data): void {
    this.uploadInProgress = false;
    this.onUploadCompleted.emit(data);    
  }

  getPicture(): any { 
    return this.uploaded;    
  }

  _canUploadOnServer(): boolean {
    return !!this.uploaderOptions['url'];
  }
}
