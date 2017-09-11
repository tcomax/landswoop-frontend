import { Component } from '@angular/core';
import { FormGroup, AbstractControl, FormBuilder, Validators } from '@angular/forms';
import { EmailValidator, EqualPasswordsValidator } from '../../theme/validators';
import { HttpModule } from '@angular/http';
import { Http, Response } from '@angular/http';
import { Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';


@Component({
  selector: 'app-settings',
  templateUrl: './settings.html',
  styleUrls: ['./settings.scss'],
})
export class SettingsComponent {
  form: FormGroup;
  repeatPassword: AbstractControl;
  password: AbstractControl;
  passwords: FormGroup;

  submitted: boolean = false;
  url: string = 'http://localhost:3000/auth/updatepassword';
  reqBody: string;
  headers: Headers = new Headers();

  constructor(fb: FormBuilder, private http: Http, private router: Router) {

    this.form = fb.group({
      'passwords': fb.group({
        'password': ['', Validators.compose([Validators.required, Validators.minLength(4)])],
        'repeatPassword': ['', Validators.compose([Validators.required, Validators.minLength(4)])],
      }, { validator: EqualPasswordsValidator.validate('password', 'repeatPassword') }),
    });

    this.passwords = <FormGroup> this.form.controls['passwords'];
    this.password = this.passwords.controls['password'];
    this.repeatPassword = this.passwords.controls['repeatPassword'];

  }

  onSubmit( values: Object ): void {
    console.log(values);
    const newPasswords = values['passwords'];
    console.log(newPasswords.password);
    console.log(newPasswords.repeatPassword);
    this.submitted = true;
    if (this.form.valid) {
      this.headers.append('Content-Type', 'application/x-www-form-urlencoded');
      const reqBody = `password=${newPasswords.password}&repeatPassword=${newPasswords.repeatPassword}`; 
      const options = new RequestOptions({ headers: this.headers, withCredentials: true });
      console.log(`body: ${reqBody}`);
      this.http.post(this.url, reqBody, options)     
        .map(res => res.json())
        .subscribe(
          data => {
            console.log(data);
            if (data) {
              if (data.status === 'success') {
                this.router.navigateByUrl('/login');
              }
            }
          },
          err => { 
            console.log(err);
            this.router.navigateByUrl('/login');
          },
          () => console.log('Authentication Complete'),
      );
      // your code goes here
      // console.log(values);
    }
  }
}

