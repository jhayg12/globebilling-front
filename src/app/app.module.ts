/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
import { APP_BASE_HREF } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { CoreModule } from './@core/core.module';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { ThemeModule } from './@theme/theme.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
// import { NbPasswordAuthStrategy, NbAuthModule, NbAuthJWTToken } from '@nebular/auth';
import { NbPasswordAuthStrategy, NbAuthModule, NbAuthJWTToken } from '../app/@theme/components/auth';
import { AuthGuard } from '../app/auth-guard.service';
import { NbSecurityModule, NbRoleProvider } from '@nebular/security';
// import { NbSecurityModule, NbRoleProvider } from '../app/@theme/components/security';
import { RoleProvider } from '../app/@theme/components/security/role.provider';
import { NgxPermissionsModule } from 'ngx-permissions';
import { SettingsModule } from '../app/pages/settings/settings.module';


const formSetting: any = {
  redirectDelay: 0,
  showMessages: {
    success: true,
  },
};

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule,
    SettingsModule,

    NgbModule.forRoot(),
    ThemeModule.forRoot(),
    CoreModule.forRoot(),
    NbAuthModule.forRoot({
      strategies: [
        NbPasswordAuthStrategy.setup({
          name: 'email',

          token: {
            class: NbAuthJWTToken
          },

          baseEndpoint: 'http://localhost:3000/globebilling',
          login: {
            endpoint: '/auth/signin',
            method: 'post',
          },
          register: {
            endpoint: '/auth/signup',
            method: 'post',
          },
          // logout: {
          //   endpoint: '/auth/signout',
          //   method: 'post',
          // },
          requestPass: {
            endpoint: '/auth/forgot-password',
            method: 'post',
          },
          resetPass: {
            endpoint: '/auth/reset-pass',
            method: 'post',
          },

        }),
      ],
      forms: {
        login: formSetting,
        register: formSetting,
        requestPassword: formSetting,
        resetPassword: formSetting,
        logout: {
          redirectDelay: 0,
        },
      },
    }), 

    NbSecurityModule.forRoot({
      accessControl: {
        Viewer: {
          view: ['user'],
        },
        Support: {
          parent: 'Viewer',
        },
        Admin: {
          parent: 'Support',
          create: 'roles',
          remove: '*',
        },
      },
    }),

    NgxPermissionsModule.forRoot(),

  ],
  bootstrap: [AppComponent],
  providers: [
    { provide: APP_BASE_HREF, useValue: '/' }, 
    AuthGuard,
    { provide: NbRoleProvider, useClass: RoleProvider }, 
  ],
})
export class AppModule {
}
