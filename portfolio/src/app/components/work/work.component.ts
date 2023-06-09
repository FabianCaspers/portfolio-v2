import { Component, HostListener, OnInit, Renderer2, ElementRef } from '@angular/core';

@Component({
  selector: 'app-work',
  templateUrl: './work.component.html',
  styleUrls: ['./work.component.scss']
})
export class WorkComponent implements OnInit {

  constructor(private renderer: Renderer2, private el: ElementRef) { }

  workArray = [
    {
      companyLogo: "../../../assets/company/ESA.png",
      position: "Logistics manager",
      company: "ESA Honau",
      tasks: ["SAP", "Team leading", "Goods receiving"],
      date: "February 2021 - Mai 2023  <br> \"Move to Switzerland\"",
      reverse: false
    },
    {
      companyLogo: "../../../assets/company/Agaba.png",
      position: "Team leader logistics",
      company: "Agaba",
      tasks: ["Logistics optimizations", "Loading and unloading of goods", "Customer service"],
      date: "January 2020 - Mai 2020",
      reverse: true
    },
    {
      companyLogo: "../../../assets/company/abcr.png",
      position: "Logistics specialist",
      company: "ABCR Gute Chemie",
      tasks: ["SAP", "Goods receiving", "Quality control"],
      date: "July 2017 - December 2019",
      reverse: false
    },
    {
      companyLogo: "../../../assets/company/carl-roth.png",
      position: "Team leader logistics",
      company: "Carl Roth",
      tasks: ["Goods receiving", "Stock care", "SAP"],
      date: "Mai 2015 - April 2017",
      reverse: true
    },
    {
      companyLogo: "../../../assets/company/sew.png",
      position: "Logistics specialist",
      company: "SEW Eurodrive",
      tasks: ["SAP", "Packer", "Quality control"],
      date: "July 2014 - December 2014",
      reverse: false
    },
    {
      companyLogo: "../../../assets/company/mercedes.png",
      position: "Shift leader logistics",
      company: "Mercedes-Benz",
      tasks: ["Goods receipt", "Suppliers internal", "SAP"],
      date: "March 2012 - April 2014",
      reverse: true
    },
  ];

  ngOnInit(): void {
    this.checkScreenSize();
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: Event) {
    this.checkScreenSize();
  }

  checkScreenSize() {
    const timelineElements = this.el.nativeElement.querySelectorAll('.vertical-timeline-element');

    if (timelineElements) {
      if (window.innerWidth <= 720) {
        timelineElements.forEach((element: any) => {
          if (element.classList.contains('reverse')) {
            this.renderer.removeClass(element, 'reverse');
            this.renderer.addClass(element, 'modified');
            const dateElement = element.querySelector('.vertical-timeline-element-date-reverse');
            if (dateElement) {
              this.renderer.removeClass(dateElement, 'vertical-timeline-element-date-reverse');
              this.renderer.addClass(dateElement, 'vertical-timeline-element-date');
            }
          }
        });
      } else {
        timelineElements.forEach((element: any) => {
          if (element.classList.contains('modified')) {
            this.renderer.removeClass(element, 'modified');
            this.renderer.addClass(element, 'reverse');
            const dateElement = element.querySelector('.vertical-timeline-element-date');
            if (dateElement) {
              this.renderer.removeClass(dateElement, 'vertical-timeline-element-date');
              this.renderer.addClass(dateElement, 'vertical-timeline-element-date-reverse');
            }
          }
        });
      }
    }
  }
}
