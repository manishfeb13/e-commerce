import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit{

  loginFormGroup!: FormGroup
  pass = [{'username':'username123', 'password':'password123'}];
  passwordHide = true;
  
  constructor(private fb: FormBuilder){}
  ngOnInit(): void {
    this.loginFormGroup = this.fb.group({
      'username' : ['',[Validators.required, Validators.minLength]],
      'password' : ['',[Validators.required]]
    })
  }

  onSubmit(formSubmitted:any){
    console.log(formSubmitted.value)
    if(this.pass[0]['username'] == formSubmitted.value['username'] && this.pass[0]['password']){
      alert('password correct')
    }else{
      alert('password incorrect')
    }
  }

  toggle(){
    this.passwordHide = this.passwordHide == false ? true : false
  }

  

}
