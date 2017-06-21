import { Injectable } from '@angular/core';

@Injectable()
export class AuthorService {
    getAuthors(): String[] {
        return ["Marley", "Hunter", "Szcabolcs"];
    } 
}