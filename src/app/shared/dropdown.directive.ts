import { Directive, Input, OnInit, HostListener, HostBinding } from '@angular/core';

@Directive({
    selector: '[appDropdown]'
})
export class DropdownDirective implements OnInit {
    @Input() toggleOpen: boolean;
    @HostBinding('class.open') open = '';

    ngOnInit() {
        this.toggleOpen = false;
    }

    @HostListener('click') click(eventData: Event) {
        this.toggleOpen = !this.toggleOpen;
        if (this.toggleOpen) {
            this.open = 'open';
        } else {
            this.open = '';
        }
    }
}
