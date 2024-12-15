import {Routes} from '@angular/router';
import {LoginComponent} from './pages/auth/login/login.component';
import {SiginComponent} from './pages/auth/sigin/sigin.component';
import {TasksComponent} from './pages/tasks/tasks.component';
import {HomeComponent} from './pages/home/home.component';

import {NotfoundComponent} from './pages/notfound/notfound.component';
import {canActivate, redirectUnauthorizedTo} from '@angular/fire/auth-guard';


export const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'sigin', component: SiginComponent},
  {path: 'home', component: HomeComponent, ...canActivate(()=> redirectUnauthorizedTo(['/login']))},
  {path:'tasks', component: TasksComponent, ...canActivate(()=> redirectUnauthorizedTo(['/login']))},
  {
    path: 'auth', children: [
      {path: 'login', component: LoginComponent},
      {path: 'sigin', component: SiginComponent}
    ]
  },
  {path: 'notfound', component: NotfoundComponent},
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: '**', redirectTo: '/notfound', pathMatch: 'full'},
];
