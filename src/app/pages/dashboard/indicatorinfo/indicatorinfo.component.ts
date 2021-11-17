import { Component, OnDestroy } from '@angular/core';
import { NbThemeService } from '@nebular/theme';



@Component({
  selector: 'ngx-indicatorinfo',
  styleUrls: ['./indicatorinfo.component.scss'],
  templateUrl: './indicatorinfo.component.html',
})
export class IndicatorInfoComponent implements OnDestroy {
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
