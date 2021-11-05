import { NgModule } from '@angular/core';
import { ThemeModule } from '../../@theme/theme.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {
    NbActionsModule,
    NbButtonModule,
    NbCardModule,
    NbTabsetModule,
    NbUserModule,
    NbRadioModule,
    NbSelectModule,
    NbListModule,
    NbIconModule,
    NbStepperModule,
  } from '@nebular/theme';
import { StudentsComponent } from './students.component';
import { SmartTableComponent } from './smart-table/smart-table.component';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { EnrollStudentComponent } from './enroll-student/enroll-student.component';
import { WebCamComponent } from './enroll-student/webcam/webcam.component';
import { WebcamModule } from 'ngx-webcam';



  @NgModule({
    imports: [
      ReactiveFormsModule,
      FormsModule,
      ThemeModule,
      NbCardModule,
      NbUserModule,
      NbButtonModule,
      NbTabsetModule,
      NbActionsModule,
      NbRadioModule,
      NbSelectModule,
      NbListModule,
      NbIconModule,
      NbButtonModule,
      Ng2SmartTableModule,
      NbStepperModule,
      WebcamModule
    ],
    declarations: [
      SmartTableComponent,
      StudentsComponent,
      EnrollStudentComponent,
      WebCamComponent
    ],
  })

  export class StudentsModule { }