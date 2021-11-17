import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  formValue:any;
  constructor() { }

  ngOnInit(): void {
    this.formValue = JSON.parse(localStorage.getItem('formData'));
    console.log("data--",JSON.stringify(this.formValue));
  }

}
