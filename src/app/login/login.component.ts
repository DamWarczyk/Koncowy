import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {HttpServiceService} from "../servis/http-service.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  myForm: FormGroup;

  constructor(private fb: FormBuilder, private httpService: HttpServiceService) {
    this.myForm = this.fb.group({
      name: ['', Validators.required],
      password: ['', [Validators.required,Validators.pattern('^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$')]],
      regulamin: [false, Validators.requiredTrue],
    })
  }

  ngOnInit(): void {
  }

  onClick(){
  }

  get name() {
    return this.myForm.get('name');
  }

  get password(){
    return this.myForm.get('password')
  }
}
