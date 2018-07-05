import { Component } from '@angular/core';
import { LocalDataSource } from 'ng2-smart-table';

import { UsersService } from '../../../@core/data/users.service';

@Component({
  selector: 'userlist',
  templateUrl: './userlist.component.html',
  styles: [`
    nb-card {
      transform: translate3d(0, 0, 0);
    }
  `],
})
export class UserlistComponent {

  settings = {
    actions : false,
    add: {
      addButtonContent: '',
      createButtonContent: '',
      cancelButtonContent: '',
    },
    edit: {
      editButtonContent: '<i class="nb-edit"></i>',
      saveButtonContent: '<i class="nb-checkmark"></i>',
      cancelButtonContent: '<i class="nb-close"></i>',
    },
    delete: {
      deleteButtonContent: '<i class="nb-trash"></i>',
      confirmDelete: true,
    },
    columns: {
      username: {
        title: 'Username',
        type: 'string',
      },
      email: {
        title: 'Email Address',
        type: 'string',
      },
      role: {
        title: 'Role',
        type: 'number'
      },
      status: {
        title: 'Status',
        type: 'number',
      },
    },
  };

  source: LocalDataSource = new LocalDataSource();

  constructor(private service: UsersService) {
    
    this.service.getUsers().subscribe((users) => {

      const _data = users;

      // Convert Array to Object Type
      const data = Object.keys(_data).map(i => _data[i]); 
 
      // Get the role value from object
      for (let i=0; i<data.length; i++) {
        const role = Object.keys(data).map(i => data[i].role);
        for (let i=0; i<role.length; i++) {
          data[i].role = role[i].role;
        }
      }

      this.source.load(data);

    });
  }

  onDeleteConfirm(event): void {
    if (window.confirm('Are you sure you want to delete?')) {
      event.confirm.resolve();
    } else {
      event.confirm.reject();
    }
  }

  
}
