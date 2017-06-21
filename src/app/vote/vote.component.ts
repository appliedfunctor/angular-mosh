import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'vote',
    template: `
        <div class="voteContainer">
            <i class="glyphicon glyphicon-menu-up" 
            [class.selected]='selected(1)'
            (click)='change(1)'>
            </i><br>

                {{ voteCount }}<br>

            <i class="glyphicon glyphicon-menu-down" 
            [class.selected]='selected(-1)'
            (click)='change(-1)'>
            </i>
        </div>
    `,
    styles: [`
        .glyphicon {
            cursor: pointer;
        }

        .voteContainer {
            text-align: center;
            width: 20px;
        }

        .selected {
            color: orange;
        }
    `]
})
export class VoteComponent {
    @Input() voteCount = 0;
    @Input() myVote = 0;
    @Output() vote = new EventEmitter();

    change(value) {
        if(this.inRange(this.myVote, value)) {            
            this.myVote += value;
            this.voteCount += value;
            this.vote.emit({
                voteCount: this.voteCount, 
                myVote: this.myVote
            })
        }
    }

    private inRange(vote, change) {
        return (change < 0 && vote > -1) 
        || (change > 0 && vote < 1) 
    }

    selected(value): Boolean {
        return this.myVote === value
    }

}