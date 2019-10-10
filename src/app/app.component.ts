import { Component } from '@angular/core';
import { SlidersService } from './services/sliders.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(public slidersData: SlidersService) {}

  title = 'EcuSolar Sitio Web';
}
