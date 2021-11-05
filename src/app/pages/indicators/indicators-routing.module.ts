import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { D3Component } from '../charts/d3/d3.component'; 
import { IndicatorsComponent } from './indicators.component';
import { UploadIndicatorComponent } from './upload/upload.component'; 

const routes: Routes = [{
  path: '',
  component: IndicatorsComponent,
  children: [{
    path: 'upload',
    component: UploadIndicatorComponent,
  }, {
    path: 'd3',
    component: D3Component,
  }],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IndicatorsRoutingModule { }

export const routedComponents = [
    IndicatorsComponent,
  UploadIndicatorComponent
];
