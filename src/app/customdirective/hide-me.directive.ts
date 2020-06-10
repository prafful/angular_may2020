import { Directive, TemplateRef, ViewContainerRef, Input } from '@angular/core';

@Directive({
  selector: '[appHideMe]'
})
export class HideMeDirective {

  constructor(private tr:TemplateRef<any>, private vc: ViewContainerRef) { }

  @Input() set appHideMe(check: boolean){
    if(check){
        this.vc.clear()
    }else{
      this.vc.createEmbeddedView(this.tr)
    }
  }

}
