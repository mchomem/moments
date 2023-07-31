import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/User';
import { UserService } from 'src/app/services/user/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-delete',
  templateUrl: './user-delete.component.html',
  styleUrls: ['./user-delete.component.scss']
})
export class UserDeleteComponent implements OnInit {

  constructor(private userService: UserService
    , private router: Router) { }

  user!: User

  ngOnInit(): void {
    this.user = JSON.parse(sessionStorage.getItem('user')!)
  }

  onDelete() {
    this.userService.delete(this.user.id!).subscribe(() => {
      
      sessionStorage.removeItem('token')
      window.sessionStorage.removeItem('user')

      this.router.navigate(['/']).then(() => {
        window.location.reload();
      });
    })
  }
}
