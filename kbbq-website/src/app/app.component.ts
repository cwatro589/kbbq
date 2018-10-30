import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';

  mobileView:boolean = false;
  mobileViewWidth:number = 764;

  constructor() {
  }

  ngOnInit():void {
    var self = this;
    this.screenResize();
    $(window).resize(function(e) {
      self.screenResize();
    });
  }

  screenResize():void {
    var windowWidth = $(window).width();
    var viewResult = false;
    if (windowWidth <= this.mobileViewWidth) {
      viewResult = true;
    }
    this.mobileView = viewResult;
  }
}
