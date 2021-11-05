import { Component, OnDestroy } from '@angular/core';
import { NbThemeService } from '@nebular/theme';



@Component({
  selector: 'ngx-index',
  styleUrls: ['./index.component.scss'],
  templateUrl: './index.component.html',
})
export class IndexComponent implements OnDestroy {
    
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
