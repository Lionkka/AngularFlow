import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
    selector: '[appCustom]'
})
export class CustomDirective {
    constructor(el: ElementRef) {
        el.nativeElement.style.backgroundColor = 'yellow';
    }
}

@Directive({
    selector: '[appHighlight]'
})
export class OnMouseHighlightDirective {
    private el: HTMLElement;

    constructor(el: ElementRef) {
        this.el = el.nativeElement;
    }

    @HostListener('mouseenter')
    onMouseEnter() {
        this.setBackgroundColor('red');
    }

    @HostListener('mouseleave')
    onMouseLeave() {
        this.setBackgroundColor(null);
    }

    private setBackgroundColor(color: string): void {
        this.el.style.backgroundColor = color;
    }
}
