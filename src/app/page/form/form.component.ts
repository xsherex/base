import { Component } from '@angular/core';
import { ContattaciComponent } from "../../component/form/contattaci/contattaci.component";
import { HeaderComponent } from '../../component/testo/header/header.component';

@Component({
  selector: 'app-form',
  imports: [ContattaciComponent, HeaderComponent],
  templateUrl: './form.component.html',
  styleUrl: './form.component.scss'
})
export class FormComponent {

}
