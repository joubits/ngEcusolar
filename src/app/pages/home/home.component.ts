import { Component, OnInit } from '@angular/core';
import { SlidersService } from '../../services/sliders.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(public slidersData: SlidersService) { }

  ngOnInit() {
  }

}
