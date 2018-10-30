import { AlertService } from './../../core/alert.service';
import { Router } from '@angular/router';
import { AuthService } from './../../core/auth.service';
import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(public auth: AuthService, private router: Router,private alert: AlertService) { }

  ngOnInit() {
  }
  writePost() {
    if (this.auth.authState == null) {
     this.alert.showAlert();
    } else {
      this.router.navigate(['/dashboard'])
    }
  }
}
