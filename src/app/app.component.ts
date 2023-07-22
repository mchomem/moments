import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Moments';

  public userLogged: boolean = false

  constructor() { }

  ngOnInit(): void {

    if(sessionStorage.getItem('token')) {
      this.userLogged = true
    }

  }
}
