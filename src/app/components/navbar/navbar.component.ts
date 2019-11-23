import { Component, OnInit } from '@angular/core';
// ----- Routing
import { Router } from '@angular/router';
// ----- Forms/Validation
import { FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms';
// ----- Services
import { UserService } from 'src/app/services/user.service';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  validationForm: FormGroup;

  constructor(
    private router : Router,
    public formBuilder : FormBuilder,
    private userService : UserService) { 
      this.validationForm = formBuilder.group({
        usernameInput: [null, Validators.required],
        passwordInput: [null, Validators.required],
        RememberMe: new FormControl(false),
      });
    }

  ngOnInit() {
  }

  route(value) {
    switch (value) {
      case 0 : 
        console.log(value)
        this.router.navigateByUrl('/sign-up')
        break;
    }
  }

  get input() { return this.validationForm.get('usernameInput'); }
  get passwordFormEx() { return this.validationForm.get('passwordInput'); }

  authenticate() {
    let username : string = this.validationForm.controls['usernameInput'].value;
    let password : string = this.validationForm.controls['passwordInput'].value;

    this.userService.login(username, password);
  }

}
