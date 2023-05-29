import { Component, HostListener, OnInit, Renderer2, ElementRef } from '@angular/core';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.scss']
})
export class EducationComponent implements OnInit {

  constructor(private renderer: Renderer2, private el: ElementRef) { }

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
