import { Component, OnInit } from '@angular/core';

import { 
  FormGroup, 
  FormControl,
  Validators,
  FormBuilder
 } from '@angular/forms';
 
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  LoginForm!: FormGroup;

  constructor(public fb: FormBuilder) {
    this.LoginForm = this.fb.group({
      'nombre': new FormControl("", Validators.required),
      'password': new FormControl("", Validators.required)
    })

   }

  ngOnInit() {
  }

}
