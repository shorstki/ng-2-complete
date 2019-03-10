import {Directive, HostBinding, HostListener, Input, OnInit} from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective implements OnInit {
  // @HostBinding('style.backgroundColor') get setColor() {
  //   return this.backgroundColor;
  // }
  @Input() defaultColor = 'white';
  @Input() highlightColor = 'yellow';

  private backgroundColor: string;

  @HostListener('mouseenter') mouseover() {
    this.backgroundColor = this.highlightColor;
  }

  @HostListener('mouseleave') mouseleave() {
    this.backgroundColor = this.defaultColor;
  }

  @HostBinding('style.backgroundColor') get setColor() {
    return this.backgroundColor;
  }

  constructor() {}

  // constructor(private element: ElementRef, private renderer: Renderer2) {
  //   this.renderer.setStyle(this.element.nativeElement, 'background-color', 'yellow');
  // }

  ngOnInit() {
    this.backgroundColor = this.defaultColor;
  }

}
