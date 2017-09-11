import { Component, OnInit, AfterViewInit } from '@angular/core';
import { FormGroup, AbstractControl, FormBuilder, Validators } from '@angular/forms';
import { EmailValidator, EqualPasswordsValidator } from '../../theme/validators';
import { HttpModule } from '@angular/http';
import { Http, Response } from '@angular/http';
import { Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';


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

  submitted: boolean = false;
  url: string = 'http://localhost:3000/auth/profile';

  constructor( fb: FormBuilder, private http: Http, private router: Router) {
    
    this.form = fb.group({
      'phone': ['', Validators.compose([Validators.required, Validators.minLength(11)])],
      'bank': ['', Validators.compose([Validators.required, Validators.minLength(3)])],
      'accountNum': ['', Validators.compose([Validators.required, Validators.minLength(10)])],
    });

    this.phone = this.form.controls['phone'];
    this.bank = this.form.controls['bank'];
    this.accountNum = this.form.controls['accountNum'];

    const headers: Headers = new Headers();  
    const options = new RequestOptions({ withCredentials: true });
    this.http.get(this.url, options)     
      .map(res => res.json())
      .subscribe(
        data => { 
          console.log(data);
          if (data) {
            console.log(JSON.stringify(data));            
            this.data = data; 
          }
        },
        err => { 
          console.log(err);
          this.router.navigateByUrl('/login');
        },
        () => console.log('Authentication Complete'),
    );       

  }

  ngAfterViewInit() {   
    
  }
  
  ngOnInit() {
    setTimeout(() => { 
      if (this.data) {
        (<FormGroup>this.form).controls['phone'].setValue(this.data.cntctInfo.phone); 
        (<FormGroup>this.form).controls['bank'].setValue(this.data.bank); 
        (<FormGroup>this.form).controls['accountNum'].setValue(this.data.accountNum); 
      }
    }, 1000);
  }

  onSubmit( values: Object ): void {
    const headers: Headers = new Headers();  
    headers.append('Content-Type', 'application/x-www-form-urlencoded');
    const options = new RequestOptions({ headers, withCredentials: true });
    console.log(values);
    this.submitted = true;
    if (this.form.valid) {
      const reqBody = `phone=${values['phone']}`
      .concat(`&email=${this.data.cntctInfo.email}`)
      .concat(`&name=${this.data.cntctInfo.name}`)
      .concat(`&bank=${values['bank']}`)
      .concat(`&photoUrl=photo.jpg`)
      .concat(`&accountNum=${values['accountNum']}`); 
      console.log(reqBody);        
      console.log(`options: ${JSON.stringify(options)}`);              
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
