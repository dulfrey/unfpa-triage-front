import { NgModule } from '@angular/core';
import { NbMenuModule } from '@nebular/theme';

import { ThemeModule } from '../@theme/theme.module';
import { PagesComponent } from './pages.component';
import { DashboardModule } from './dashboard/dashboard.module';
import { ECommerceModule } from './e-commerce/e-commerce.module';
import { PagesRoutingModule } from './pages-routing.module';
import { MiscellaneousModule } from './miscellaneous/miscellaneous.module';
import { StudentsModule } from './students/students.module';
import { UploaderComponent } from './uploader/uploader.component';
import { IndicatorsModule } from './indicators/indicators.module';

@NgModule({
  imports: [
    PagesRoutingModule,
    ThemeModule,
    NbMenuModule,
    DashboardModule,
    ECommerceModule,
    MiscellaneousModule,
    StudentsModule,
    IndicatorsModule
  ],
  declarations: [
    PagesComponent,
  ],
})
export class PagesModule {
}
