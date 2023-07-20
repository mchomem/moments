import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.scss']
})
export class ErrorComponent implements OnInit {

  seconds: number = 15;

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.tryReconnect();
  }

  tryReconnect() {

    const timeInterval = setInterval(() => {

      this.seconds--;

      if (this.seconds === 0) {
        clearInterval(timeInterval);
        this.router.navigate(['/']);
      }

    }, 1000);
  }
}
