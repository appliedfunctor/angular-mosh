import { Component } from '@angular/core';
import { AuthorService } from './author.service';

@Component({
    selector: 'authors',
    templateUrl: './authors.component.html',
    providers: [AuthorService]
})
export class AuthorsComponent {
    title = "Authors Page Title";
    authors;
    post = {
        isFavourite: true
    }

    constructor(authorService: AuthorService) {
        this.authors = authorService.getAuthors();
    }

    onFavouriteChange($event) {
        console.log($event)
    }
}