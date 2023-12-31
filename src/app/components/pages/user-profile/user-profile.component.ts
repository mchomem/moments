import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { UserService } from 'src/app/services/user/user.service';
import { MessageService } from 'src/app/services/message/message.service';

import { User } from 'src/app/models/User';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit {

  constructor(private userService: UserService
    , private router: Router
    , private activatedRoute: ActivatedRoute
    , public messageService: MessageService) { }

  user!: User;
  userForm!: FormGroup;

  ngOnInit(): void {
    const id = Number(this.activatedRoute.snapshot.paramMap.get('id'))

    this.userService
      .get(id)
      .subscribe({
        next: (reponse) => {
          this.user = reponse.data
          this.userForm.patchValue(this.user)
        }
        , error: () => {
          //TODO: tratar casos de erro
        }
        , complete: () => { }
      });

    this.userForm = new FormGroup({
      id: new FormControl(this.user ? this.user.id : ''),
      full_name: new FormControl(this.user ? this.user.full_name : ''),
      login: new FormControl(this.user ? this.user.login : ''),
      password: new FormControl('', [Validators.required]),
      confirm_password: new FormControl('', [Validators.required])
    });
  }

  get full_name() {
    return this.userForm.get('full_name')!;
  }

  get password() {
    return this.userForm.get('password')!;
  }

  get confirm_password() {
    return this.userForm.get('confirm_password')!;
  }

  submit() {
    if (this.userForm.invalid) {
      return
    }

    if (this.userForm.get('password')?.value !== this.userForm.get('confirm_password')?.value) {
      this.messageService.add('The passcode does not confere');
      return
    }

    const formData = new FormData();
    formData.append('password', this.userForm.get('password')?.value)

    this.userService
      .update(this.user.id!, formData)
      .subscribe({
        next: () => {
          this.messageService.add('User data updated.');
          this.router.navigate(['/']);
        }
        , error: () => {
          //TODO: tratar casos de erro
        }
        , complete: () => { }
      });

  }

  goDeleteUser() {
    this.router.navigate([`user-profile-delete/${this.user.id}`]);
  }
}
