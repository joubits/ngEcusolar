import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Slider } from '../interfaces/slider.interface'

@Injectable({
  providedIn: 'root'
})
export class SlidersService {

  sliderList: Slider;
  aboutInfo:any = [];
  loading = true;

  constructor( private http: HttpClient ) {
    this.cargarSliders();
    this.getaboutInfo();
  }

  private cargarSliders() {
    this.http.get('https://ecusolar-48c94.firebaseio.com/sliders.json')
      .subscribe( (resp:Slider) => {
        this.loading = false;
        this.sliderList = resp;
        //console.log(this.sliderList);
      } );
  }

  private getaboutInfo() {
    this.http.get('https://ecusolar-48c94.firebaseio.com/aboutHome.json')
      .subscribe( (resp:any) => {
        this.loading = false;
        this.aboutInfo = resp;
        console.log(this.aboutInfo);
      } );
  }
}
