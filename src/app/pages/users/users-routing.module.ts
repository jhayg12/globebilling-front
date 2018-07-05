import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UsersComponent } from './users.component';
import { UserlistComponent } from './userlist/userlist.component';

const routes: Routes = [{
  path: '',
  component: UsersComponent,
  children: [{
    path: 'list',
    component: UserlistComponent,
  }],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UsersRoutingModule { }

export const routedComponents = [
  UsersComponent,
  UserlistComponent,
];
