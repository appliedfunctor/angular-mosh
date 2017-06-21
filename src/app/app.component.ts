import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Hello Angular';
  likeData = {
    totalLikes: 12,
    iLike: true
  }
  voteData = {
    voteCount: 25,
    myVote: 1
  }

  onVote(event) {
    console.log(event.voteCount + " :: " + event.myVote)
  }

}
