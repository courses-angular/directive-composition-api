import {Directive, ElementRef, HostListener, Input, Renderer2} from '@angular/core';

@Directive({
  selector: '[appChangeColor]',
  standalone: true,
})
export class ChangeColorDirective {
@Input()color: string = ''
  constructor(private el: ElementRef,private renderer: Renderer2) { }

  @HostListener('mouseenter',['$event'])onMouseEnter(event:any){
    this.renderer.setStyle(this.el.nativeElement,'color',this.color|| 'red')
  }
  @HostListener('mouseleave',['$event'])onMouseLeave(event:any){
    this.renderer.setStyle(this.el.nativeElement,'color','black')
  }

}
