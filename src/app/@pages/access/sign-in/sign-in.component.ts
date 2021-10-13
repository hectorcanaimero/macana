import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AnimationOptions } from 'ngx-lottie';
import { StorageMap } from '@ngx-pwa/local-storage';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { AuthService } from '@pages/access/services/auth.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})

export class SignInComponent implements OnInit {

  isRecovery: boolean = false;
  formLogin!: FormGroup;
  formRecovery!: FormGroup;
  message: any;
  options: AnimationOptions = { path: './assets/lotties/lf20_8pdng1gc.json'};

  constructor(
    private router: Router,
    private fb: FormBuilder,
    private storage: StorageMap,
    private authService: AuthService,
  ) { }

  ngOnInit(): void {
    this.loadForm();
  }

  submit = () => {
    if (this.formLogin.invalid) return;
    const value = this.formLogin.value;
    this.authService.signIn(value.email, value.password).subscribe(
      (user) => {
        this.storage.set('user', user).subscribe(() => {});
        this.router.navigate(['pages', 'dash']);
      },
      (err) => this.message = err.error.message
    );
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
