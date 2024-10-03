import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ecommerce';
  sideNavOpen = true;

  constructor(private router:Router){}

  toggleSideNav(){
    this.sideNavOpen = !this.sideNavOpen;
  }

  navigate(route:any){
    this.router.navigate([route])
  }
}
