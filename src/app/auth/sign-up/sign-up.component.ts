import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {
  signupForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
  ) {
  }

  ngOnInit() {
    this.signupForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['',
        [Validators.required,
        Validators.minLength(6),
        Validators.maxLength(10)]],
      name: ['Your Name',
        [Validators.required,
        Validators.pattern('[a-zA-Z][a-zA-Z ]+')]]
    });
  }

  get form() { return this.signupForm.controls; }

  signup() {
    if (this.signupForm.invalid) {
      return;
    }
    // console.log(this.signupForm.value);
    console.log(this.signupForm.get('name').setValue('blah'));
  }

}
