/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { AnalyticsService } from './@core/utils/analytics.service';
import { SeoService } from './@core/utils/seo.service';

@Component({
  selector: 'ngx-app',
  template: '<router-outlet></router-outlet>',
})
export class AppComponent implements OnInit {

  constructor( translate : TranslateService,  private analytics: AnalyticsService, private seoService: SeoService) {
    // translate.addLangs(['es' , 'en']);
    // translate.get('hello')
    // .subscribe( (res:string) => {
    //   console.log(res)
    // })
    // translate.setDefaultLang('es')
    // translate.use('es')
    
  }

  ngOnInit(): void {
    this.analytics.trackPageViews();
    this.seoService.trackCanonicalChanges();
  }
}
