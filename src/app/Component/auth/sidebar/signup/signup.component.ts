import { Router } from '@angular/router';

import { Component, OnInit } from '@angular/core';
import { RegisterPayload } from 'src/app/Model/RegisterPyload';
import { AuthServiceService } from 'src/app/Service/auth-service.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent implements OnInit {
  register: RegisterPayload = new RegisterPayload();
  submited = false;

  constructor(
    private authService: AuthServiceService,
    private router: Router
  ) {}

  ngOnInit(): void {}
  submit() {
    this.authService.register(this.register).subscribe(
      (data) => console.log(data),
      (error) => console.log(error)
    );
    this.register = new RegisterPayload();
    // this.goHome();
  }
  save() {
    this.submit();
    this.submited = true;
  }
  goHome() {
    this.router.navigate(['/sidebar']);
  }
}
