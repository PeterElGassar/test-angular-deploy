import { AfterViewInit, Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appSwiperPaginationStyle]'
})
export class SwiperPaginationStyleDirective implements AfterViewInit {

  private isMobile: boolean = window.innerWidth <= 768;

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  ngAfterViewInit(): void {
    this.updatePaginationStyle();
  }

  @HostListener('window:resize')
  onResize(): void {
    const currentIsMobile = window.innerWidth <= 768;
    if (currentIsMobile !== this.isMobile) {
      this.isMobile = currentIsMobile;
      this.updatePaginationStyle();
    }
  }

  private updatePaginationStyle(): void {
    if (this.isMobile) {
      this.renderer.addClass(this.el.nativeElement, 'pagination-mobile');
      this.renderer.removeClass(this.el.nativeElement, 'pagination-desktop');
    } else {
      this.renderer.addClass(this.el.nativeElement, 'pagination-desktop');
      this.renderer.removeClass(this.el.nativeElement, 'pagination-mobile');
    }
  }

}
