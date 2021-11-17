import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-offer',
  templateUrl: './offer.component.html',
  styleUrls: ['./offer.component.scss']
})
export class OfferComponent implements OnInit {
  formValue :any;
  constructor() { }

  ngOnInit(): void {
    this.formValue = JSON.parse(localStorage.getItem('formData'));
    console.log("data--",JSON.stringify(this.formValue));
  }

}
