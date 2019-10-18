import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { infoHeader } from '../interfaces/infoHeader.interface';

@Injectable({
  providedIn: 'root'
})
export class InfoHeaderService {
  info: infoHeader;

  constructor( private http:HttpClient ) {
    this.getInfoHeader();
  }

  private getInfoHeader() {
    this.http.get('assets/data/info-header.json')
    .subscribe( (resp: infoHeader) => { 
      this.info = resp; 
      //console.log(this.info);
    });
  }
}
