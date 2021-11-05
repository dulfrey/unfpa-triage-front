import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UploadIndicatorComponent } from './upload/upload.component';
import { IndicatorsRoutingModule, routedComponents } from './indicators-routing.module';
import { UploaderComponent } from '../uploader/uploader.component';
import { NgxFileDropModule } from 'ngx-file-drop';

const components = [
  UploadIndicatorComponent,
  UploaderComponent
];


@NgModule({
  
  imports: [
    NgxFileDropModule,
    CommonModule,
    IndicatorsRoutingModule
  ],
  declarations: [...routedComponents, ...components],
})
export class IndicatorsModule { }
