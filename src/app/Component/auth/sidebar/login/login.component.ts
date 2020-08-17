import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginPayload } from 'src/app/Model/LoginPyload';
import { AuthServiceService } from 'src/app/Service/auth-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  loginPayload: LoginPayload;
  constructor(private authService: AuthServiceService, private router: Router) {
    this.loginForm = new FormGroup({
      username: new FormControl(),
      password: new FormControl(),
    });

    this.loginPayload = {
      username: '',
      password: '',
    };
  }

  ngOnInit(): void {}
  onSubmit() {
    this.loginPayload.username = this.loginForm.get('username').value;
    this.loginPayload.password = this.loginForm.get('password').value;

    this.authService.login(this.loginPayload).subscribe((data) => {
      if (data) {
        console.log('Login Succcess..');
        // this.router.navigateByUrl('');
      } else {
        console.log('login fail');
      }
    });
  }
}
