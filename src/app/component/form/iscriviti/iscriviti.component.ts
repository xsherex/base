import { CommonModule} from '@angular/common';
import { Component, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Form2Component } from '../../../page/form2/form2.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';



@Component({
  selector: 'app-iscriviti',
  imports: [FormsModule, CommonModule, MatDatepickerModule, MatNativeDateModule, MatFormFieldModule, MatInputModule,  ],
  templateUrl: './iscriviti.component.html',
  styleUrl: './iscriviti.component.scss'
})
export class IscrivitiComponent {
myForm: any;
model: any;
  date!: Date;
  onSubmit(form: any): void {
    if (form.valid) {
      console.log(form.value);
    }
  }
}

/*

  onSubmit(): void {
    if (this.myForm.valid) {
      console.log(this.myForm.value);
    }

OnFormSubmitted(){
    console.log('Iscritto');
  }*/

