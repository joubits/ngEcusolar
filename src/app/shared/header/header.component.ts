import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { InfoHeaderService } from '../../services/info-header.service';

@Component({
  selector: 'header',
  templateUrl: './header.component.html'
})
export class HeaderComponent implements OnInit {

  constructor( public infoHeaderService: InfoHeaderService ) { }

  ngOnInit() {
  }

}
