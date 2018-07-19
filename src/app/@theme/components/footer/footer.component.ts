import { Component } from '@angular/core';

@Component({
  selector: 'ngx-footer',
  styleUrls: ['./footer.component.scss'],
  template: `
    <span class="created-by">Created by <b><a href="https://www.iscale-solutions.com/" target="_blank">IScale Solutions Inc.</a></b> 2017</span>
  `,
})
export class FooterComponent {
}
