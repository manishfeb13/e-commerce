import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user-account',
  templateUrl: './user-account.component.html',
  styleUrls: ['./user-account.component.scss']
})
export class UserAccountComponent implements OnInit {

  constructor(private route: ActivatedRoute){}

  username!:string
  
  ngOnInit(): void {
    let user = this.route.snapshot.queryParamMap.get('username');
    this.username = user == null ? '' : user;  //managing type null is not assignable to type string error.

}

}
