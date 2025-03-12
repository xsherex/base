import { Component, signal } from '@angular/core';
import { GreetingComponent } from '../../component/testo/saluto/greeting.component';
import { CounterComponent } from '../../component/testo/conteggio/counter.component';
import { HeaderComponent } from '../../component/testo/header/header.component';

@Component({
  selector: 'app-home',
  imports: [GreetingComponent, CounterComponent ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  homeMessage = signal ('Cambia il valore')

  keyUpHandler(event: KeyboardEvent){
    console.log('user pressed the &{event.key}key');
  }
}
