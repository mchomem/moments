import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/models/User';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  user!: User;

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.user = JSON.parse(sessionStorage.getItem('user')!)
    this.user.login = `${this.user.login.substring(0, 1).toUpperCase()}${this.user.login.substring(1, this.user.login.length)}`
  }

  logout() {
    sessionStorage.setItem('token', '')
    this.router.navigate(['/']).then(() => {
      window.location.reload()
    })
  }
}
