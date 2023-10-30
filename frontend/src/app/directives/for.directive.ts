import { Directive, OnInit, Input, ViewContainerRef, TemplateRef } from '@angular/core';

@Directive({
  selector: '[myFor]'
})
export class ForDirective implements OnInit {
  
  @Input('myForEm') numbers: number[] = []; // Coloque o @Input acima da propriedade

  constructor(private container: ViewContainerRef, private template: TemplateRef <any>) {
    // O construtor pode estar vazio ou conter lógica de inicialização, mas o @Input deve estar acima de uma propriedade de classe.
  }

  ngOnInit(): void {
    for(let number of this.numbers){
      this.container.createEmbeddedView(this.template, { $implicit: number})
    }
  }
}