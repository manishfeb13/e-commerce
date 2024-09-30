import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit{

  loginFormGroup!: FormGroup
  pass = [{'username':'username123', 'password':'password123'}];
  incorrectCredentials = false;
  textFieldTypeisPass : boolean = true;
  passHideShow = 'show'
  
  constructor(private fb: FormBuilder, private router: Router){}
  ngOnInit(): void {
    this.loginFormGroup = this.fb.group({
      'username' : ['',[Validators.required]],
      'password' : ['',[Validators.required]]
    })
  }

  onSubmit(formSubmitted:any){
    console.log(formSubmitted.value)
    if(this.pass[0]['username'] == formSubmitted.value['username'] && this.pass[0]['password'] == formSubmitted.value['password']){
      this.router.navigate(['account'], 
        {queryParams:{'username': formSubmitted.value['username']}})
    }else{
      this.incorrectCredentials = true;
    }
  }

  toggle(){
    this.textFieldTypeisPass = !this.textFieldTypeisPass
    this.passHideShow = this.passHideShow == 'hide' ? 'show' : 'hide';
  }

  

}
