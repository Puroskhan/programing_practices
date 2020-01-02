import { Directive, Renderer2, ElementRef, OnInit, HostListener, HostBinding, Input } from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective implements OnInit {

  @Input() defaultColor:string;
  @Input('appBetterHighlight') highlightColor:string =  'red';
  @HostBinding('style.backgroundColor') backgroundColor:string;

  constructor(private elementRef:ElementRef,private renderer:Renderer2) { 

  }

  ngOnInit(){
    // this.renderer.setStyle(this.elementRef.nativeElement,'background-color','yellow');
    this.backgroundColor = this.defaultColor;
  }
  @HostListener('mouseenter') mouseover(eventData:Event){
    // this.renderer.setStyle(this.elementRef.nativeElement,'background-color','yellow');
    this.backgroundColor =this.defaultColor;
  }
  @HostListener('mouseleave') mouseleave(eventData:Event){
    // this.renderer.setStyle(this.elementRef.nativeElement,'background-color','transparent');
    this.backgroundColor = 'transparent';

  }
}
