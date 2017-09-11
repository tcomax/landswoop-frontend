import { Component } from '@angular/core';
import { FormGroup, AbstractControl, FormBuilder, Validators } from '@angular/forms';
import { EmailValidator, EqualPasswordsValidator } from '../../theme/validators';
import { HttpModule } from '@angular/http';
import { Http, Response } from '@angular/http';
import { Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';


@Component({
  selector: 'register',
  templateUrl: './register.html',
  styleUrls: ['./register.scss']
})
export class Register {

  form: FormGroup;
  name: AbstractControl;
  phone: AbstractControl;
  email: AbstractControl;
  password: AbstractControl;
  invitedBy: AbstractControl;  
  member: AbstractControl;

  submitted: boolean = false;
  url: string = 'http://localhost:3000/auth';
  register: boolean = false;
  message: boolean = false;
  isLargeDisplay: boolean = false;
  isSmallDisplay: boolean = false;
  bgUrls: string[];
  bgUrl: string;
  idx: number;
  mobHeight: any;
  mobWidth: any;

  reqBody: string;

  constructor( fb: FormBuilder, private http: Http, private router: Router) {
    
    this.form = fb.group({
      'name': ['', Validators.compose([Validators.required, Validators.minLength(4)])],
      'phone': ['', Validators.compose([Validators.required, Validators.minLength(4)])],
      'email': ['', Validators.compose([Validators.required, EmailValidator.validate])],
      'password': ['', Validators.compose([Validators.required, Validators.minLength(4)])], 
      'invitedBy': ['', Validators.compose([Validators.required, Validators.minLength(4)])],    
      'member': ['', Validators.compose([Validators.required, Validators.minLength(4)])],  
    });

    this.invitedBy = this.form.controls['invitedBy']; 
    this.member = this.form.controls['member']; 
    this.name = this.form.controls['name'];
    this.phone = this.form.controls['phone'];
    this.email = this.form.controls['email'];
    this.password = this.form.controls['password'];

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
    this.mobHeight = window.screen.height;
    this.mobWidth = window.screen.width;
    if (window.screen.width > 640) { 
      this.isLargeDisplay = true;
    } else {
      this.isSmallDisplay = true; 
    }
    
    console.log(window.screen.width);
    console.log(window.screen.height);

    console.log(`idx: ${this.idx} url: ${this.bgUrl}`);

  }

  onSubmit( values: Object ): void {
    this.submitted = true;
    if (this.form.valid) {
      const headers: Headers = new Headers();
      headers.append('Content-Type', 'application/x-www-form-urlencoded');
      const reqBody = `name=${values['name']}`
      .concat(`&phone=${values['phone']}`)
      .concat(`&email=${values['email']}`)
      .concat(`&username=${values['email']}`)      
      .concat(`&password=${values['password']}`)
      .concat(`&invitedBy=${values['invitedBy']}`);               
      console.log(reqBody);
      const options = new RequestOptions({ headers, withCredentials: true });
      console.log(JSON.stringify(options));      
      const registrationUrl = `${this.url}/register`;
      this.http.post(registrationUrl, reqBody, options)     
        .map(res => res.json())
        .subscribe(
          data => { 
            console.log(data);
            if (data) {
              if (data.status === 'success') {
                this.router.navigateByUrl('/pages/dashboard');
              }
            }
          },
          err => { 
            console.log(err);
            this.router.navigateByUrl('/register');
          },
          () => console.log('Authentication Complete'),
      );
      // your code goes here
      // console.log(values);
    }
  }

  findContactByPhone(): void {
    console.log(`value: ${this.invitedBy.value}`);
    console.log(`value: ${this.member.value}`);
    if (this.invitedBy.value === undefined || this.member.value === undefined) {
      return;
    }
    console.log(`value: ${this.invitedBy.value}`);
    console.log(`_value: ${this.member.value}`);
    const findMemberUrl = `${this.url}/findcontactbyphone`;
    const reqBody = `phone=${this.invitedBy.value}&name=${this.member.value}`;
    console.log(`body: ${reqBody}`);    
    const headers: Headers = new Headers();
    headers.append('Content-Type', 'application/x-www-form-urlencoded');    
    const options = new RequestOptions({ headers, withCredentials: true });    
    this.http.post(findMemberUrl, reqBody, options)     
    .map(res => res.json())
    .subscribe(
      data => { 
        console.log(data);
        if (data) {
          if (data.phone === this.invitedBy.value) {
            this.register = true;        
            this.message = false;            
          } else {
            if (data === 'none') {
              this.register = false;
              this.message = true;
              console.log (`register:${this.register} message:${this.message}`)
           }
          }
        } 
      },
      err => { 
        console.log(err);
      },
      () => console.log('Registration Complete'),
  );
  }
}
