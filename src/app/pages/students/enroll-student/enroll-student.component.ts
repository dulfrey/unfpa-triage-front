import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NbGlobalPhysicalPosition, NbToastrService } from '@nebular/theme';

@Component({
  selector: 'ngx-enroll-student',
  templateUrl: './enroll-student.component.html',
  styleUrls: ['./enroll-student.component.scss'],
})
export class EnrollStudentComponent {
    firstForm: FormGroup;
    secondForm: FormGroup;
    thirdForm: FormGroup;

  constructor(private fb: FormBuilder,private toastrService: NbToastrService,private router: Router) {
    
  }
  ngOnInit() {
    this.firstForm = this.fb.group({
      firstCtrl: ['', Validators.required],
    });

    this.secondForm = this.fb.group({
      secondCtrl: ['', Validators.required],
    });

    this.thirdForm = this.fb.group({
      thirdCtrl: ['', Validators.required],
    });
  }

  onFirstSubmit() {
    this.firstForm.markAsDirty();
  }

  onSecondSubmit() {
    this.secondForm.markAsDirty();
  }

  onThirdSubmit() {
    //this.thirdForm.markAsDirty();
    const config = {
      status: "success",
      destroyByClick: true,
      duration: 2000,
      hasIcon: true,
      position: NbGlobalPhysicalPosition.TOP_RIGHT,
      preventDuplicates: true,
    };
    this.toastrService.show(
      "Student enrolled",
      `Success`,
      config);
      this.router.navigateByUrl('/pages/students');
  }


}
