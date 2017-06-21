import { Directive, ElementRef, Renderer } from '@angular/core';

@Directive({
    selector: '[autoGrow]',
    host: {
        '(focus)': 'onFocus()',
        '(blur)': 'onBlur()'
    }
})
export class AutoGrowDirective {

    private originalWidth: Number;

    constructor (private el: ElementRef, private renderer: Renderer) {
        this.originalWidth = this.el.nativeElement.offsetWidth;
    }

    onFocus() {     
        this.renderer.setElementStyle(  this.el.nativeElement, 
                                        "width", 
                                        "200px");
    }

    onBlur() {
        this.renderer.setElementStyle(  this.el.nativeElement, 
                                        "width", 
                                        this.originalWidth.toString()+"px");
    }
}