import { Component, OnInit } from '@angular/core';

declare var require: any;
const AOS = require('aos');

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'portfolio';

  ngOnInit(): void {
    AOS.init({
      // Optionally pass in options
    });
  }
}

