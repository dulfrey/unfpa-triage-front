import { Component, OnDestroy } from '@angular/core';
import { NbThemeService } from '@nebular/theme';



@Component({
  selector: 'ngx-fonts',
  styleUrls: ['./fonts.component.scss'],
  templateUrl: './fonts.component.html',
})
export class FontsComponent implements OnDestroy {
    
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
