import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth/auth.service';
import { User } from 'src/app/models/User';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MessageService } from 'src/app/services/message.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  user!: User;
  token!: string;
  loginForm!: FormGroup;

  constructor(private authService: AuthService
    , private router: Router
    , public messageService: MessageService) { }

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      login: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required])
    });
  }

  get login() {
    return this.loginForm.get('login')!;
  }

  get password() {
    return this.loginForm.get('password')!;
  }

  onSubmit() {

    if (this.loginForm.invalid)
      return;

    this.authService
      .get(this.login.value, this.password.value)
      .subscribe((response) => {
        this.user = response.data

        if (this.user.token === null) {
          this.messageService.add('Access denied')
        } else {
          (this.user.token.length > 0)
          sessionStorage.setItem('token', this.user.token)
          sessionStorage.setItem('user', JSON.stringify(this.user))

          this.router.navigate(['/'])
            .then(() => {
              window.location.reload()
            })
        }

      });
  }
}
