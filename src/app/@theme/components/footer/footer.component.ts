import { Component } from '@angular/core';

@Component({
  selector: 'ngx-footer',
  styleUrls: ['./footer.component.scss'],
  template: `
    <span class="created-by">Created with ♥ by <b><a href="http://akwit.org" target="_blank">AkwIT</a></b> 2019</span>
    <div class="socials">
      <a href="#" target="_blank" class="socicon-github"></a>
      <a href="#" target="_blank" class="socicon-facebook"></a>
      <a href="#" target="_blank" class="socicon-linkedin"></a>
    </div>
  `,
})
export class FooterComponent {
}
