import { Component, OnInit } from '@angular/core';
import { Form, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { timer } from 'rxjs';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {

  isRecovery: boolean = false;
  formLogin!: FormGroup;
  formRecovery!: FormGroup;

  constructor(
    private fb: FormBuilder
  ) { }

  ngOnInit(): void {
    this.loadForm();
  }

  submit = () => {
    console.log(this.isRecovery);
    if (this.isRecovery) {
      console.log(this.formRecovery.value);
      this.isRecovery = false;
      return;
    }
    console.log(this.formLogin.value);
    this.isRecovery = false;
  }

  recoveryPassword = () => this.isRecovery = !this.isRecovery;

  loadForm = () => {
    this.formLogin = this.fb.group({
      email: ['', [Validators.email, Validators.required]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    })
    this.formRecovery = this.fb.group({
      email: ['', [Validators.email, Validators.required]],
    })
  }

}
