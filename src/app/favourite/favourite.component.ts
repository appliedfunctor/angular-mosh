import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FavouriteService } from './favourite.service';

@Component({
    selector: 'favourite',
    template: `<i (click)="toggle()" 
                class="glyphicon" 
                [class.glyphicon-star]="isFavourite"
                [class.glyphicon-star-empty]="!isFavourite"
                >
                </i>`,
    styles: [`
    .glyphicon{
        color: green;
    }
    `]
})
export class FavouriteComponent {

    @Input() isFavourite: Boolean = false;
    @Output() change = new EventEmitter();

    constructor() {
        this.isFavourite = false;
    }

    toggle() {
        this.isFavourite = !this.isFavourite;
        this.change.emit({ newValue: this.isFavourite });
    }
}