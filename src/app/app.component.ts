/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
import { Component, OnInit } from '@angular/core';
import { AnalyticsService } from './@core/utils/analytics.service';
import { NbMenuService } from '@nebular/theme';

@Component({
  selector: 'ngx-app',
  template: '<router-outlet></router-outlet>',
})
export class AppComponent implements OnInit {

  constructor(private analytics: AnalyticsService, 
    private menuService: NbMenuService) {

    // Getting User Menu Events
    // this.menuService.onItemClick()
    //   .subscribe((event) => {
    //     this.onContecxtItemSelection(event.item.title);
    // });
  }

  // Display User Menu Events
  // onContecxtItemSelection(title) {
  //   console.log(title);
  // }

  ngOnInit(): void {
    this.analytics.trackPageViews();
  }
}
