import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { map } from 'rxjs/operators/map';

// import { NbAuthService, NbAuthJWTToken } from '@nebular/auth';
// import { NbRoleProvider } from '@nebular/security';

import { NbAuthService, NbAuthJWTToken } from '../../../@theme/components/auth';
import { NbRoleProvider } from '../../../@theme/components/security';

@Injectable()
export class RoleProvider implements NbRoleProvider {

  constructor(private authService: NbAuthService) {
  }

  getRole(): Observable<string> {
    return this.authService.onTokenChange()
      .pipe(
        map((token: NbAuthJWTToken) => {
          let role = token.getPayload()['role'];
          return token.isValid() ? role['roleName'] : 'guest';
        }),
      );
  }
}