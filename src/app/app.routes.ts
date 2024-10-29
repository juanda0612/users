import { Routes } from '@angular/router';
import { UserComponent } from './componente/user/user.component';
import { UserLoginComponent } from './componente/user-login/user-login.component';
import { UsersComponent } from './componente/users/users.component';

export const routes: Routes = [
    {path:"user/signup",component:UserComponent},
    {path:"user/profile/:id",component:UserComponent},
    {path:"user/login", component:UserLoginComponent}
];
