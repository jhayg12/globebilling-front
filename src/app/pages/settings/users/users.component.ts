import { Component } from '@angular/core';
import { LocalDataSource } from 'ng2-smart-table';
import { Router, RouterModule } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { UsersService } from '../../../@core/data/users.service';

@Component({
  selector: 'users',
  templateUrl: './users.component.html',
  styles: [`
    nb-card {
      transform: translate3d(0, 0, 0);
    }
  `],
})
export class UsersComponent {

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
          fullname: {
            title: 'Fullname',
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

  constructor(private service: UsersService, 
    private router: Router,
    private modalService: NgbModal) {
        
    this.service.getUsers().subscribe((users) => {

        const _data = users;

        // Convert Array to Object Type
        const data = Object.keys(_data).map(i => _data[i]); 
        
        // Convert the status to readable one
        for (let i=0; i<data.length; i++) {
          if (data[i].status != 1) {
            data[i].status = 'Inactive';
            break;
          }
          data[i].status = 'Active';
          
          // Check for the Role Value
          if (data[i].role != null) {
            const role = Object.keys(data).map(i => data[i].role);
            data[i].role = role[i].roleName;
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

  addUser () {
    this.router.navigate(['/pages/settings/users/create']);
  }

  
}
