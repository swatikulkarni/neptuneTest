import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.scss']
})
export class EducationComponent implements OnInit {
  formValue:any;
  constructor() { }

  ngOnInit(): void {
    this.formValue = JSON.parse(localStorage.getItem('formData'));
    console.log("data--",JSON.stringify(this.formValue));
  }

}
