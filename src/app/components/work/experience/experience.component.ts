import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss']
})
export class ExperienceComponent implements OnInit {
  formValue:any;
  constructor() { }

  ngOnInit(): void {
    this.formValue = JSON.parse(localStorage.getItem('formData'));
    console.log("data--",JSON.stringify(this.formValue));
  }

}
