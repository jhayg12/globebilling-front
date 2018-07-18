import { Component } from '@angular/core';
import { LocalDataSource } from 'ng2-smart-table';
import { Router, RouterModule } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { RolesCreationComponent } from '../roles-creation/roles-creation.component';

import { RolesService } from '../../../@core/data/roles.service';

import { MENU_ITEMS } from '../../pages-menu';

@Component({
  selector: 'roles',
  templateUrl: './roles.component.html',
  styles: [`
    nb-card {
      transform: translate3d(0, 0, 0);
    }
  `],
})
export class RolesComponent {

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
      roleName: {
        title: 'Role',
        type: 'string',
      },
    },
  };

  source: LocalDataSource = new LocalDataSource();

  constructor(private service: RolesService, 
    private router: Router,
    private modalService: NgbModal) {
    
    this.service.getRoles().subscribe((roles) => {

      const _data = roles;

      // Convert Array to Object Type
      const data = Object.keys(_data).map(i => _data[i]); 
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

  addRole () {
    const activeModal = this.modalService.open(RolesCreationComponent, { size: 'lg', container: 'nb-layout' });
    activeModal.componentInstance.modalHeader = 'Large Modal';
  }

  menu = MENU_ITEMS;
  
}
