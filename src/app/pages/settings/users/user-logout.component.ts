import { Component, OnInit } from '@angular/core';
// import { NbAuthService } from '@nebular/auth';
import { NbAuthService } from '../../../@theme/components/auth';
import { Router } from '@angular/router';

@Component({
  selector: 'user-logout',
  template: ''
})
export class UserLogoutComponent implements OnInit {

    constructor(private authService: NbAuthService, private router: Router) {}

    ngOnInit() {
        localStorage.clear();
        this.router.navigate(['/auth/login']);
    }

}