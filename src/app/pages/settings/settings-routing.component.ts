import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SettingsComponent } from './settings.component';
import { UsersComponent } from './users/users.component';
import { UserCreateComponent } from './users/user-create/user-create.component';
import { RolesComponent } from './roles/roles.component';

const routes: Routes = [{
  path: '',
  component: SettingsComponent,
  children: [{
    path: 'users',
    component: UsersComponent,
  },
  {
    path: 'users/create',
    component: UserCreateComponent
  },
  {
    path: 'roles',
    component: RolesComponent
  }
],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SettingsRoutingModule { }

export const routedComponents = [
    SettingsComponent,
    RolesComponent,
];
