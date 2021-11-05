import {Component, OnDestroy} from '@angular/core';
import { Router } from '@angular/router';



interface CardSettings {
  title: string;
  iconClass: string;
  type: string;
}

@Component({
  selector: 'ngx-students',
  styleUrls: ['./students.component.scss'],
  templateUrl: './students.component.html',
})
export class StudentsComponent implements OnDestroy {

  onCreateStudent(){
    this.router.navigateByUrl('/pages/enrollstudent');
    
    
      // this.showToast(this.status, this.title, this.content);
    
  }
  

  constructor(private router: Router) {
    
  }

  ngOnDestroy() {
    
  }
}
