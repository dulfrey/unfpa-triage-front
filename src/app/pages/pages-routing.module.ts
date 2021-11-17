import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ECommerceComponent } from './e-commerce/e-commerce.component';
import { NotFoundComponent } from './miscellaneous/not-found/not-found.component';
import { StudentsComponent } from './students/students.component';
import { EnrollStudentComponent } from './students/enroll-student/enroll-student.component';
import { IndicatorsComponent } from './indicators/indicators.component';
import { InfoComponent } from './dashboard/info/info.component';
import { IndexComponent } from './dashboard/index/info.component';
import { DownloadsComponent } from './dashboard/downloads/downloads.component';
import { FontsComponent } from './dashboard/fonts/fonts.component';
import { IndicatorInfoComponent } from './dashboard/indicatorinfo/indicatorinfo.component';

const routes: Routes = [{
  path: '',
  component: PagesComponent,
  children: [
    {
      path: 'students',
      component: StudentsComponent,
    },
    {
      path: 'indicators',
      loadChildren: () => import('./indicators/indicators.module')
        .then(m => m.IndicatorsModule),
    },
    {
      path: 'enrollstudent',
      component: EnrollStudentComponent,
    },
    {
      path: 'dashboard',
      component: ECommerceComponent,
    },
    {
      path: 'iot-dashboard',
      component: DashboardComponent,
    },
    {
      path: 'info',
      component: InfoComponent,
    },
    {
      path: 'index',
      component: IndexComponent,
    },
    {
      path: 'downloads',
      component: DownloadsComponent,
    },
    {
      path: 'fonts',
      component: FontsComponent,
    },
    {
      path: 'indicatorsinfo',
      component: IndicatorInfoComponent,
    },
    {
      path: 'layout',
      loadChildren: () => import('./layout/layout.module')
        .then(m => m.LayoutModule),
    },
    {
      path: 'forms',
      loadChildren: () => import('./forms/forms.module')
        .then(m => m.FormsModule),
    },
    {
      path: 'ui-features',
      loadChildren: () => import('./ui-features/ui-features.module')
        .then(m => m.UiFeaturesModule),
    },
    {
      path: 'modal-overlays',
      loadChildren: () => import('./modal-overlays/modal-overlays.module')
        .then(m => m.ModalOverlaysModule),
    },
    {
      path: 'extra-components',
      loadChildren: () => import('./extra-components/extra-components.module')
        .then(m => m.ExtraComponentsModule),
    },
    {
      path: 'maps',
      loadChildren: () => import('./maps/maps.module')
        .then(m => m.MapsModule),
    },
    {
      path: 'charts',
      loadChildren: () => import('./charts/charts.module')
        .then(m => m.ChartsModule),
    },
    {
      path: 'editors',
      loadChildren: () => import('./editors/editors.module')
        .then(m => m.EditorsModule),
    },
    {
      path: 'tables',
      loadChildren: () => import('./tables/tables.module')
        .then(m => m.TablesModule),
    },
    {
      path: 'miscellaneous',
      loadChildren: () => import('./miscellaneous/miscellaneous.module')
        .then(m => m.MiscellaneousModule),
    },
    {
      path: '',
      redirectTo: 'dashboard',
      pathMatch: 'full',
    },
    {
      path: '**',
      component: NotFoundComponent,
    },
  ],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {
}
