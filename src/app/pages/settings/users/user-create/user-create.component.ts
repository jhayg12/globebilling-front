import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http/src/response';
import { UsersService } from '../../../../@core/data/users.service';
import { RolesService } from '../../../../@core/data/roles.service';

@Component({
  selector: 'user-create',
  templateUrl: './user-create.component.html',
  styleUrls: ['./user-create.component.scss']
})
export class UserCreateComponent implements OnInit {

  roles: String [];
  userForm: FormGroup;
  messages: String [];
  success: boolean;
  error: boolean;

  constructor(private roleService: RolesService, 
    private userService: UsersService,
    private router: Router,
    private formBuilder: FormBuilder  
  ) { 
    this.userForm = this.formBuilder.group({
      username: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(30)] ],
      fullname: ['', [Validators.required, Validators.minLength(10)] ],
      email: ['', [Validators.required, Validators.email] ],
      role: ['', [Validators.required] ],
      password: ['', [Validators.required, Validators.minLength(8), Validators.maxLength(30)] ]
    });
  }

  ngOnInit() { 
    this.getRoles();
  }

  // convenience getter for easy access to form fields
  get f() { return this.userForm.controls; }

  getRoles() {
    this.roleService.getRoles().subscribe((_data) => {
      const data = _data;
      const _roles = Object.keys(data).map(i => data[i]);
      this.roles = _roles;
    });
  }

  userLists() {
    this.router.navigate(['pages/settings/users']);
  }

  addUser() {
    
    const _data: Object = this.userForm.value;
    const userInfo = {  
      username: Object.values(_data)[0],
      fullname: Object.values(_data)[1],
      email: Object.values(_data)[2],
      role: Object.values(_data)[3],
      password: Object.values(_data)[4],
    }

    this.userService.addUser(userInfo).subscribe((res) => {
        setTimeout(() => {
          return this.router.navigate(['pages/settings/users']);
        }, 60 * 30);

        res = Object.keys(res).map(i => res[i]);
        this.messages = res[1];
        this.error = false;
        this.success = true;

    }, (err: HttpErrorResponse) => {
        this.error = true;
        this.success = false;
        this.messages = Object.values(err);
    });


  }

}
