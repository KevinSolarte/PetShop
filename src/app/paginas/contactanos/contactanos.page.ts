import { Component, OnInit } from '@angular/core';
import { 
  FormGroup, 
  FormControl,
  Validators,
  FormBuilder
 } from '@angular/forms';
 
@Component({
  selector: 'app-contactanos',
  templateUrl: './contactanos.page.html',
  styleUrls: ['./contactanos.page.scss'],
})
export class ContactanosPage implements OnInit {

  ContactanosPage!: FormGroup;

  constructor() { }
  
  ngOnInit() {
  }

}
