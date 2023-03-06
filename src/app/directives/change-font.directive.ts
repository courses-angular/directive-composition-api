import {Directive, ElementRef, HostListener, Renderer2} from '@angular/core';

@Directive({
  selector: '[appChangeFont]',
  standalone: true
})
export class ChangeFontDirective {

  constructor(private el: ElementRef,private renderer: Renderer2) { }

  @HostListener('mouseenter',['$event'])onMouseEnter(event:any){
    this.renderer.setStyle(this.el.nativeElement,'fontSize','30px')
  }
  @HostListener('mouseleave',['$event'])onMouseLeave(event:any){
    this.renderer.setStyle(this.el.nativeElement,'fontSize','16px')
  }
}
