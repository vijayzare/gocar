import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { User } from 'src/app/Model/User.model';
import { AuthServiceService } from './../../Service/auth-service.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  constructor(public authService: AuthServiceService, private router: Router) {}
  users: Observable<User>;

  ngOnInit(): void {
    this.checkStates();
  }

  checkStates() {
    if (this.authService.isAuthenticated() === true) {
      this.authService.getCurrentUser();
      console.log('authentication successfull..');
    } else {
      console.log('authentication fails .. plse login');
    }
  }
  currentUser() {
    this.users = this.authService.getCurrentUser();
  }
  logout() {
    this.authService.logout();
    this.router.navigateByUrl('/login');
  }
  checkAuth() {
    this.authService.isAuthenticated();
  }
}
