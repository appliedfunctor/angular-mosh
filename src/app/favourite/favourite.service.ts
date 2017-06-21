import { Injectable } from '@angular/core';

@Injectable()
export class FavouriteService {
    getClass(status: Boolean):String {
        if(status) {
            return "glyphicon glyphicon-star";
        }
        return "glyphicon glyphicon-star-empty";
    }
}