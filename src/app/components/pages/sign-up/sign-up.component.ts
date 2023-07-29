import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UserService } from 'src/app/services/user/user.service';
import { MessageService } from 'src/app/services/message.service';
import { User } from 'src/app/models/User';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {

  user!: User;
  signUpForm!: FormGroup;

  constructor(private router: Router
    , private userService: UserService
    , public messageService: MessageService) { }

  ngOnInit(): void {
    this.signUpForm = new FormGroup({
      full_name: new FormControl('', Validators.required),
      login: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required),
      confirm_password: new FormControl('', Validators.required),
    });
  }

  get full_name() {
    return this.signUpForm.get('full_name')!;
  }

  get login() {
    return this.signUpForm.get('login')!;
  }

  get password() {
    return this.signUpForm.get('password')!;
  }

  get confirm_password() {
    return this.signUpForm.get('confirm_password')!;
  }

  goBack() {
    this.router.navigate(['/']).then(() => {
      window.location.reload();
    });
  }

  save() {

    if (this.signUpForm.invalid)
      return;

    if (this.signUpForm.get('password')?.value !== this.signUpForm.get('confirm_password')?.value) {
      this.messageService.add('The passcode does not confere');
      return
    }

    this.userService
      .getByLogin(this.signUpForm.get('login')?.value)
      .subscribe((response) => {
        this.user = response.data
        if (this.user != null) {
          this.messageService.add('Login already exists')
          return
        }

        const formData = new FormData();
        formData.append('full_name', this.signUpForm.get('full_name')?.value)
        formData.append('login', this.signUpForm.get('login')?.value)
        formData.append('password', this.signUpForm.get('password')?.value)

        this.userService.create(formData).subscribe(() => {
          this.messageService.add('Signed up!');
          this.goBack();
        });

      })
  }
}
