import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Slider } from '../interfaces/slider.interface'

@Injectable({
  providedIn: 'root'
})
export class SlidersService {

  sliderList: Slider;

  constructor( private http: HttpClient ) {
    this.cargarSliders();
  }

  private cargarSliders() {
    this.http.get('https://ecusolar-48c94.firebaseio.com/sliders.json')
      .subscribe( (resp:Slider) => {
        //this.cargada = true;
        this.sliderList = resp;
        console.log(this.sliderList);
      } );
  }
}
