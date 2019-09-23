import { Component } from '@angular/core';

@Component({
  selector: 'ngx-footer',
  styleUrls: ['./footer.component.scss'],
  template: `
    <span class="created-by"><b><a href="http://akwit.org" target="_blank">AkwIT</a></b> 2019</span>
  `,
})
export class FooterComponent {
}
