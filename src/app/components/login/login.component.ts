import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';
import { interval } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(public auth: AuthService, private router: Router) { }

  loginLoop;

  ngOnInit() {

    this.loginLoop = interval(1000).subscribe(() => {
      if (this.auth.isLoggedIn === "true") {
        this.router.navigate(["cockpit"]);
      }
    });

  }

  ngOnDestroy() {
    this.loginLoop.unsubscribe();
  }

}
