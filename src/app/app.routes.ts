import { Routes } from '@angular/router'
import { UsersComponent } from './users/users.component'

export const routes: Routes = [
  {
    path: '',
    // loadChildren: () => import('./users/users.component').then(m => m.UsersComponent)
    component: UsersComponent
  },
  {
    path: '**',
    redirectTo: ''
  }
]
