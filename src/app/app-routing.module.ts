import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserAccountComponent } from './user-account/user-account.component';
import { LoginComponent } from './login/login.component';
import { ListMensFashionComponent } from './list-mens-fashion/list-mens-fashion.component';

const routes: Routes = [
  {path: '', redirectTo:'login', pathMatch:'full'},
  {path:'account', component: UserAccountComponent},
  {path:'login', component: LoginComponent},
  {path:'mens-fashion', component: ListMensFashionComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
