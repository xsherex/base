import { Component } from '@angular/core';
import { ReactiveFormsModule, FormsModule, Validators, FormGroup, FormBuilder } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MatFormField, MatFormFieldModule } from '@angular/material/form-field';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatInputModule } from '@angular/material/input';
import { provideNativeDateAdapter } from '@angular/material/core';

@Component({
  selector: 'app-contattaci',
  imports: [ReactiveFormsModule, FormsModule, CommonModule, MatFormFieldModule, MatInputModule, MatDatepickerModule],
  templateUrl: './contattaci.component.html',
  styleUrl: './contattaci.component.scss'
})
export class ContattaciComponent {
  userForm: any;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.userForm = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      address: ['', Validators.required],
      mobile: ['', [Validators.required, Validators.pattern('[0-9]{10}')]],
      date: ['',Validators.required],
      age: ['', [Validators.required, Validators.min(18), Validators.max(50)]],
      gender: ['', Validators.required]
    });
  }

  submitForm(): void {
    if (this.userForm?.valid) {
      console.log('Form data:', this.userForm.value);
    }
  }

  private readonly _currentYear = new Date().getFullYear();
  readonly minDate = new Date(this._currentYear - 20, 0, 1);
  readonly maxDate = new Date(this._currentYear + 1, 11, 31);

}
