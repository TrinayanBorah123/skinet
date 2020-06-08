import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  Validators,
  AsyncValidator,
  AsyncValidatorFn,
} from '@angular/forms';
import { AccountService } from '../account.service';
import { Router } from '@angular/router';
import { timer, of } from 'rxjs';
import { switchMap, map } from 'rxjs/operators';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  regsiterForm: FormGroup;
  errors: string[];
  constructor(
    private fb: FormBuilder,
    private accountSrvice: AccountService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.createRegisterForm();
  }

  createRegisterForm() {
    this.regsiterForm = this.fb.group({
      displayName: [null, [Validators.required]],
      email: [
        null,
        [
          Validators.required,
          Validators.pattern('^[\\w-\\.]+@([\\w-]+\\.)+[\\w-]{2,4}$'),
        ],
        [this.validateEmailNottaken()],
      ],
      password: [null, Validators.required],
    });
  }
  onSubmit() {
    this.accountSrvice.register(this.regsiterForm.value).subscribe(
      (response) => {
        this.router.navigateByUrl('/shop');
      },
      (error) => {
        console.log(error);
        this.errors = error.errors;
      }
    );
  }
  validateEmailNottaken(): AsyncValidatorFn {
    return (control) => {
      return timer(500).pipe(
        switchMap(() => {
          if (!control.value) {
            return of(null);
          }
          return this.accountSrvice.checkEmailExist(control.value).pipe(
            map((res) => {
              return res ? { emailExists: true } : null;
            })
          );
        })
      );
    };
  }
}
