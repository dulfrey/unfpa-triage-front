import { Component, OnDestroy } from '@angular/core';
import { NbThemeService } from '@nebular/theme';



@Component({
  selector: 'ngx-info',
  styleUrls: ['./info.component.scss'],
  templateUrl: './info.component.html',
})
export class InfoComponent implements OnDestroy {
    // infoImage = require( '../../../../assets/images/info.png');    
    // infoImage = infoImage;
    currentTheme: string;
    commonSelectedItem = '2';
    selectedItem;
    themeSubscription: any;

  constructor(private themeService: NbThemeService) {
    this.themeSubscription = this.themeService.getJsTheme().subscribe(theme => {
        this.currentTheme = theme.name;
      });
  }

  ngOnDestroy() {
    
  }
}
