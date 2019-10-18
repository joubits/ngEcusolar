import {
  Component,
  AfterViewInit,
  ElementRef,
  OnDestroy,
  Inject,
  PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { SlidersService } from '../../services/sliders.service';

@Component({
  selector: 'slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss']
})
export class SliderComponent implements OnDestroy, AfterViewInit {
  slider: any;
  slidersUrl: string[];

  constructor(private element: ElementRef,
    @Inject(PLATFORM_ID) private platformId: Object, public slidersData: SlidersService) { }

  ngOnDestroy(): void {
    // RS's kill switch
    this.slider.revkill();
  }

  ngAfterViewInit(): void {
    if (isPlatformBrowser(this.platformId)) { // due to server side rendering check if browser
      setTimeout(() => {
        this.slider = (<any>window).$(this.element.nativeElement)
          .find('#rev_slider_one')
          .revolution(this.getSliderOptions());
      }, 10);
    }
    // this.slidersUrl[0] = 'assets/images/slides/v1-1.jpg';
    // this.slidersUrl[1] = 'assets/images/slides/v1-2.jpg';
    // this.slidersUrl[2] = 'assets/images/slides/v1-3.jpg';
    // console.log(this.slidersData.sliderList[0].url);
  }

  getSliderOptions(): any {
    return {
      'sliderType':"standard",
      'jsFileLocation':"plugins/revolution/js/",
      'sliderLayout':"fullwidth",
      'dottedOverlay':"none",
      'delay':5000,
      'navigation': {
          'keyboardNavigation':"off",
          'keyboard_direction': "horizontal",
          'mouseScrollNavigation':"off",
              'mouseScrollReverse':"default",
          'onHoverStop':"off",
          'touch':{
              'touchenabled':"on",
              'touchOnDesktop':"off",
              'swipe_threshold': 75,
              'swipe_min_touches': 1,
              'swipe_direction': "horizontal",
              'drag_block_vertical': false
          },
          'arrows': {
              'style':"uranus",
              'enable':true,
              'hide_onmobile':true,
              'hide_under':600,
              'hide_onleave':false,
              'tmp':'',
              'left': {
                  'h_align':"left",
                  'v_align':"center",
                  'h_offset':0,
                  'v_offset':0
              },
              'right': {
                  'h_align':"right",
                  'v_align':"center",
                  'h_offset':0,
                  'v_offset':0
              }
          }
          
      },
      'responsiveLevels':[1200,1040,778,480],
      'visibilityLevels':[1200,1040,778,480],
      'gridwidth':[1200,1040,778,480],
      'gridheight':[750,600,500,450],
      'lazyType':"none",
      'parallax': {
          'type':"scroll",
          'origo':"enterpoint",
          'speed':400,
          'levels':[5,10,15,20,25,30,35,40,45,50,46,47,48,49,50,55]
      },
      'shadow':0,
      'spinner':"off",
      'stopLoop':"off",
      'stopAfterLoops':-1,
      'stopAtSlide':-1,
      'shuffle':"off",
      'autoHeight':"off",
      'hideThumbsOnMobile':"off",
      'hideSliderAtLimit':0,
      'hideCaptionAtLimit':0,
      'hideAllCaptionAtLilmit':0,
      'debugMode':false,
      'fallbacks': {
          'simplifyAll':"off",
          'nextSlideOnWindowFocus':"off",
          'disableFocusListener':false,
      }
    }

  }

}
