import { Component } from '@angular/core';
import { FormGroup, AbstractControl, FormBuilder, Validators } from '@angular/forms';
import { NgIf } from '@angular/common';
import { HttpModule } from '@angular/http';
import { Http, Response } from '@angular/http';
import { Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { UserDataService } from '../../services/userdata.service';
import { UserClass } from '../../models/user-class';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'login',
  templateUrl: './login.html',
  styleUrls: ['./login.scss'],
})
export class Login {

  form: FormGroup;
  email: AbstractControl;
  password: AbstractControl;
  submitted: boolean = false;
  url: string = 'http://localhost:3000/auth';
  reqBody: string;
  headers: Headers = new Headers();
  mobHeight: any;
  mobWidth: any;
  isLargeDisplay: boolean = false;
  isSmallDisplay: boolean = false;
  bgUrls: string[];
  bgUrl: string;
  idx: number;
  user: UserClass;
  subscription: Subscription;
  data: any;
  

  constructor( 
    fb: FormBuilder, 
    private http: Http, 
    private router: Router,
    private uds: UserDataService) {
    this.form = fb.group({
      'email': ['', Validators.compose([Validators.required, Validators.minLength(4)])],
      'password': ['', Validators.compose([Validators.required, Validators.minLength(4)])],
    });

    this.bgUrls = [
      `https://www.youtube.com/embed/pqsU7yzs0i8?autoplay=1&controls=0&`
      .concat(`showinfo=0&autohide=1&loop=1&rel=0&start=60&end=90&mute=1;`),
      `https://www.youtube.com/embed/-YAimO5qchU?autoplay=1&controls=0&`
      .concat(`showinfo=0&autohide=1&loop=1&rel=0&start=60&end=90&mute=1;`),
      `https://www.youtube.com/embed/8ILj8mplkew?autoplay=1&controls=0&`
      .concat(`showinfo=0&autohide=1&loop=1&rel=0&start=20&end=90&mute=1;`),
      `https://www.youtube.com/embed/XrWmKvvfQzs?autoplay=1&controls=0&`
      .concat(`showinfo=0&autohide=1&loop=1&rel=0&start=60&end=90&mute=1;`),
      `https://www.youtube.com/embed/9RltyVgDat4?autoplay=1&controls=0`
      .concat(`&showinfo=0&autohide=1&loop=1&rel=0&start=60&end=90&mute=1;`),
    ],
    this.idx = Math.round(Math.random() * 4);
    this.bgUrl = this.bgUrls[this.idx];

    console.log(`idx: ${this.idx} url: ${this.bgUrl}`);

    this.email = this.form.controls['email'];
    this.password = this.form.controls['password'];

    this.mobHeight = window.screen.height;
    this.mobWidth = window.screen.width;
    if (window.screen.width > 640) { 
      this.isLargeDisplay = true;
    } else {
      this.isSmallDisplay = true; 
    }
    
    console.log(window.screen.width);
    console.log(window.screen.height);
  }

  private extractResponseHeaders(res: Response) {
  }

  private extractRequestHeaders(headers: Headers) {
    console.log(`login Request Headers: ${JSON.stringify(headers)}`);
  }

  private handleErrorObservable (error: Response | any) {
    console.log(error.message || error);
    return Observable.throw(error.message || error);
  }

  onSubmit( values: Object ): void {
    console.log(`values:  ${JSON.stringify(values)} `);
    console.log(`email: ${values['email']}` );
    console.log(`password: ${values['password']}`);
    this.submitted = true;

    if (this.form.valid) {
      this.headers.append('Content-Type', 'application/x-www-form-urlencoded');
      this.extractRequestHeaders(this.headers);
      const reqBody = `username=${values['email']}&password=${values['password']}`; 
      console.log(`login req.body: ${reqBody}`);
      const options = new RequestOptions({ headers: this.headers, withCredentials: true });
      console.log(`login options: ${JSON.stringify(options)}`);                    
      const response = this.http.post(`${this.url}/login`, reqBody, options);
        response.map(res => res.json())
        .subscribe(
          data => { 
            console.log(`login data => ${JSON.stringify(data)}`);
            if (data) {
              if (data.profile !== undefined) {
                this.uds.setData('login', 'profile', 'update', data.profile);                                  
                this.router.navigateByUrl('/pages/dashboard');
              } else {
                this.router.navigateByUrl('/pages/profile');
              }
            }
          },
          err => {
            console.log(`error => code:${err.code} status:${err.status} `);
            if (err.status === 401) {
              location.reload();              
            } else if (err.status === 404) {
              this.router.navigateByUrl('/login');
            }
          },
          () => {
            console.log('Authentication Complete');
          },
      );
      // your code goes here
      // console.log(values);
    }
  }
}
