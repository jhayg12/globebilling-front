import { Component, OnInit } from '@angular/core';
// import { NbAuthService } from '@nebular/auth';
import { NbAuthService } from '../../@theme/components/auth';
import { Router } from '@angular/router';

@Component({
  selector: 'userlogout',
  template: ''
})
export class UserlogoutComponent implements OnInit {

    constructor(private authService: NbAuthService, private router: Router) {}

    ngOnInit() {
        localStorage.clear();
        this.router.navigate(['/auth/login']);
    }

}
