import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'portfolio';
  username:string;
  password:string;
  loginForm: FormGroup;
  submitted = false;
 
  constructor(private formBuilder: FormBuilder){}

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
        Username: ['', [Validators.required, Validators.email]],
        Password: ['', [Validators.required, Validators.minLength(6)]],
    });
  //   get email(){return this.loginform.get('email');}
  // get psd(){return this.loginform.get('psd')}
}
get f() { return this.loginForm.controls; }

onSubmit() {
  this.submitted = true;

  // stop here if form is invalid
  if (this.loginForm.invalid) {
      return;
  }

  alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.loginForm.value))
}

}
