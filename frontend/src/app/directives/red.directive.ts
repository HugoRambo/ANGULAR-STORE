import { Directive, ElementRef, OnInit } from '@angular/core';

@Directive({
  selector: '[appRed]'
})
export class RedDirective implements OnInit {

  constructor(private el: ElementRef) {}

  ngOnInit() {
    this.el.nativeElement.style.color = '#e35e6b';
  }
}
