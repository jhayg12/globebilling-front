import { NgModule } from '@angular/core';
import { Ng2SmartTableModule } from 'ng2-smart-table';

import { ThemeModule } from '../../@theme/theme.module';
import { SettingsRoutingModule, routedComponents } from './settings-routing.component';
import { SmartTableService } from '../../@core/data/smart-table.service';
import { UsersComponent } from './users/users.component';
import { UserLogoutComponent } from './users/user-logout.component';
import { RolesComponent } from './roles/roles.component';
import { RolesCreationComponent } from './roles-creation/roles-creation.component';
import { UserCreateComponent } from './users/user-create/user-create.component';

@NgModule({
  imports: [
    ThemeModule,
    SettingsRoutingModule,
    Ng2SmartTableModule,
  ],
  declarations: [
    ...routedComponents,
    UsersComponent,
    UserLogoutComponent,
    RolesComponent,
    RolesCreationComponent,
    UserCreateComponent,
  ],
  providers: [
    SmartTableService,
  ],
})
export class SettingsModule { }
