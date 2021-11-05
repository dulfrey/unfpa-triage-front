import { Component } from '@angular/core';

@Component({
  selector: 'ngx-footer',
  styleUrls: ['./footer.component.scss'],
  template: `
    <span class="created-by">
      Created by <b><a href="https://www.it270.com" target="_blank">IT 270</a></b> 2021
    </span>
    <img src="../assets/images/DNP.png">
    <img src="../assets/images/DANE.png">
    <img src="../assets/images/migracion.png">
    
  `,
})
export class FooterComponent {
}
