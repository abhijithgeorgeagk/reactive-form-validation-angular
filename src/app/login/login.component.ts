import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from "@angular/router";
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  cookievalue = 'unknown';

  public loginForm: FormGroup;
  submitted = false;
  date: any;


  constructor(private router: Router) {

  }
  // constructor(){}
  ngOnInit() {
    this.loginForm = new FormGroup({
      'username': new FormControl(null, Validators.required),
      'password': new FormControl(null, Validators.required)
    });
  }

  get f() { return this.loginForm.controls; }

  /*Submit button click function. This will check if the entered elements are valid. If they are valid it will post the contact.*/
  authenticate() {
    this.submitted = true;
    debugger;

    if (this.loginForm.invalid) {
      return;
    }

    let username = this.loginForm.get('username').value;
    let password = this.loginForm.get('password').value;

  }
}
