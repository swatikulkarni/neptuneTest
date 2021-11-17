import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  registerForm: FormGroup;
  submitted = false;
  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
      this.registerForm = this.formBuilder.group({
          title: ['', Validators.required],
          firstName: ['', Validators.required],
          lastName: ['', Validators.required],
          // validates date format yyyy-mm-dd
          dob: ['', [Validators.required, Validators.pattern(/^\d{4}\-(0[1-9]|1[012])\-(0[1-9]|[12][0-9]|3[01])$/)]],
          email: ['', [Validators.required, Validators.email]],
          phoneNo: ['', [Validators.required, Validators.minLength(10)]],
          designation: ['', Validators.required],
          description:['', Validators.required],
          workExp: ['', Validators.required],
          TenYear: ['', Validators.required],
          tenSchool: ['', Validators.required],
          tenField: ['', Validators.required],
          TenGrade: ['', Validators.required],
          TwelthYear: ['', Validators.required],
          TwelthSchool: ['', Validators.required],
          TwelthField: ['', Validators.required],
          TwelthGrade: ['', Validators.required],
          graducationField: ['', Validators.required],
          graducationGrade: ['', Validators.required],
          graducationSchool: ['', Validators.required],
          graducationYear: ['', Validators.required],
          skillSet: ['', Validators.required],
          projectDetails: ['', Validators.required],
          acceptTerms: [false, Validators.requiredTrue]
      });
  }

  // convenience getter for easy access to form fields
  get f() { return this.registerForm.controls; }

  onSubmit() {
      this.submitted = true;

      // stop here if form is invalid
      // if (this.registerForm.invalid) {
      //     return;
      // }
      localStorage.setItem('formData',JSON.stringify(this.registerForm.value));
      // display form values on success
      console.log('SUCCESS!! :-)\n\n' + JSON.stringify(this.registerForm.value));
  }

  onReset() {
      this.submitted = false;
      this.registerForm.reset();
  }
}
