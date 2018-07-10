import { NgModule } from '@angular/core';
import { Ng2SmartTableModule } from 'ng2-smart-table';

import { ThemeModule } from '../../@theme/theme.module';
import { UsersRoutingModule, routedComponents } from './users-routing.module';
import { SmartTableService } from '../../@core/data/smart-table.service';
import { UserlistComponent } from './userlist/userlist.component';
import { UserlogoutComponent } from './userlogout.component';

@NgModule({
  imports: [
    ThemeModule,
    UsersRoutingModule,
    Ng2SmartTableModule,
  ],
  declarations: [
    ...routedComponents,
    UserlistComponent,
    UserlogoutComponent
  ],
  providers: [
    SmartTableService,
  ],
})
export class UsersModule { }
