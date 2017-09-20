import { Component, OnInit, AfterViewInit, ElementRef, Input, ViewChild  } from '@angular/core';
import { FormGroup, AbstractControl, FormBuilder, Validators } from '@angular/forms';
import { EmailValidator, EqualPasswordsValidator } from '../../theme/validators';
import { HttpModule } from '@angular/http';
import { Http, Response } from '@angular/http';
import { Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { BaPictureUploader } from '../../theme/components/baPictureUploader/baPictureUploader.component';
import { UserDataService } from '../../services/userdata.service';
import { UserClass } from '../../models/user-class';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.html',
  styleUrls: ['./profile.scss'],  
})
export class ProfileComponent implements OnInit, AfterViewInit {

  form: FormGroup;
  phone: AbstractControl;
  bank: AbstractControl;
  accountNum: AbstractControl;
  data: any;
  formData: FormData = new FormData(); 
  @ViewChild('photo') baPictureUploader: BaPictureUploader;
  picture: any;
  avatar = 'default';
  user: UserClass;
  subscription: Subscription;
  promise: Promise<any>;

  submitted: boolean = false;
  url: string = 'http://localhost:3000/auth/profile';

  constructor( 
    fb: FormBuilder, 
    private http: Http, 
    private router: Router,
    private uds: UserDataService,
  ) {
    
    this.form = fb.group({
      'phone': ['', Validators.compose([Validators.required, Validators.minLength(11)])],
      'bank': ['', Validators.compose([Validators.required, Validators.minLength(3)])],
      'accountNum': ['', Validators.compose([Validators.required, Validators.minLength(10)])],
    });

    this.phone = this.form.controls['phone'];
    this.bank = this.form.controls['bank'];
    this.accountNum = this.form.controls['accountNum'];

    this.subscription = this.uds.getData('profileComponent').subscribe(
      payload => { 
        this.user = payload.data; 
        if (payload.key === 'profile') {
          this.avatar = this.user.photoUrl;
          (<FormGroup>this.form).controls['phone'].setValue(this.user.phone); 
          (<FormGroup>this.form).controls['bank'].setValue(this.user.bank); 
          (<FormGroup>this.form).controls['accountNum'].setValue(this.user.accountNum); 
          console.log(`profile user: ${JSON.stringify(this.user)}`);
        }
      },
      error => {
        console.log(`Error getting user data fro UDS - ${error}`);
      });
      this.uds.setData('ProfilesComponent', 'profile', 'reload', {});
  }

  ngAfterViewInit() {   
    
  }
  
  ngOnInit() {

  }
  
  sendFormViaXHR(formData: FormData, url: string): Promise<any> {
    return new Promise<any>(
      function(resolve, reject) {
        const xhr = new XMLHttpRequest();
        
        
        xhr.open('POST', url, true);
    
        xhr.upload.onprogress = function(e) {
          if (e.lengthComputable) {
            const percentage = (e.loaded / e.total) * 100;
            console.log(`${percentage}%`);   
            console.log(xhr.DONE);         
          }
        };
        
        xhr.onerror = function(e) {
          console.log('Error');
          console.log(e);
        };
    
        xhr.onload = function() {
         
        };
    
        xhr.send(formData);
        if (xhr.DONE) {
          resolve('done');
        }
        if (!xhr.DONE) {
          reject('error');
        }
      });
  }

  onSubmit( values: Object ): void {
    this.picture = this.baPictureUploader.getPicture(); 
    console.log(`picture type: ${JSON.stringify(this.picture)}`);
    const headers: Headers = new Headers();  
    this.submitted = true;
    if (this.form.valid) {
      const formData = new FormData();
      if (this.picture !== undefined) {
        /* headers.append('Accept', 'application/json');
        headers.append('Content-Type', `multipart/form-data;boundary=${Math.random()}`);*/
        formData.append('avatar', this.picture);
        formData.append('phone', values['phone']);
        formData.append('bank', values['bank']);
        formData.append('accountNum', values['accountNum']);
        this.sendFormViaXHR(formData, this.url)
        .then(function(result) {
          console.log(result); // "Stuff worked!"
          alert('Updated');
        }, function(err) {
          console.log(err); // Error: "It broke"\
          alert('Failed');
        });
      } else {
        headers.append('Content-Type', 'application/x-www-form-urlencoded'); 
        const options = new RequestOptions({ headers, withCredentials: true });        
        const reqBody = `phone=${values['phone']}`
        .concat(`&bank=${values['bank']}`)
        .concat(`&photoUrl=${this.user.photoUrl}`)        
        .concat(`&accountNum=${values['accountNum']}`);
        console.log(reqBody);        
        this.http.post(this.url, reqBody, options)     
          .map(res => res.json())
          .subscribe(
            data => { 
              console.log(JSON.stringify(data));
              if (data) {
                if (data.status === 'success') {
                  this.router.navigateByUrl('/pages/dashboard');
                }
              }
            },
            err => { 
              console.log(err);
              this.router.navigateByUrl('/login');
            },
            () => console.log('Authentication Complete'),
        );
      }
    }
  }
}
