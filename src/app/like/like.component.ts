import { Component, Input } from '@angular/core';
import { LikeService } from "./like.service";

@Component({
    selector: 'like',
    providers: [LikeService],
    template: `
    <i class='glyphicon glyphicon-heart pointer'
    [class.selected] = 'iLike'
    (click) = 'toggle()'
    ></i>
    {{ totalLikes }}
    `,
    styles: [`
        .glyphicon-heart {
            color: #ccc;
            cursor: pointer;
        }

        .selected {
            color: deeppink;
        }
    `]
})
export class LikeComponent {
    @Input() iLike: Boolean = false;
    @Input() totalLikes = 0;

    toggle() {
        this.totalLikes += this.iLike ? -1 : 1;
        this.iLike = !this.iLike;
    }
}