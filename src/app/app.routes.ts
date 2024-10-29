import { Routes } from '@angular/router';
import { UserComponent } from './componente/user/user.component';
import { UserLoginComponent } from './componente/user-login/user-login.component';
import { UsersComponent } from './componente/users/users.component';
import { InicioComponent } from './componente/inicio/inicio.component';
import { ProduccionComponent } from './componente/produccion/produccion.component';
import { ConsumoComponent } from './componente/consumo/consumo.component';

export const routes: Routes = [
    {path:"home", component:InicioComponent},
    {path:"production", component:ProduccionComponent},
    {path:"consumption", component:ConsumoComponent},
    {path:"user/signup",component:UserComponent},
    {path:"user/profile/:id",component:UserComponent},
    {path:"user/login", component:UserLoginComponent},
    {path:"user/logout", component:UserLoginComponent}
];
