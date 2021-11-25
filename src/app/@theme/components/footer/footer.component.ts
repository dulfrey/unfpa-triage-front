import { Component } from '@angular/core';

@Component({
  selector: 'ngx-footer',
  styleUrls: ['./footer.component.scss'],
  template: `
    <span class="created-by">
      Created by <b><a href="https://www.it270.com" target="_blank">IT 270</a></b> 2021
    </span>
    <a class="logo" href="#" >
      <img style="height: 40px; width: auto;" src="../../../../assets/images/logos/logo-unfpa-color.png" alt=""/>
    </a>
    <a class="logo" href="#" >
      
      <img style="height: 40px; width: 100%;" src="../../../../assets/images/logos/gobierno-colombia.png" alt=""/>
    </a>
    
  `,
})
export class FooterComponent {
}
