import {Observer, Observable} from 'rxjs';
import {UrlBuilder, PROJECTION} from "./components/url-builder";
import {Query, KIND} from "./query";
import {Response} from "./components/response";
import {Parser} from "./components/parser";
import {Entity} from "./entity";
import {Error} from "./components/error";

export class Photo {
    public static findById() {

    }

    public static findByIds() {

    }

    public static insideAlbumId() {

    }

    public static query() {

    }
}




let album = Album.findById();
let album = Album.findByIds();
let album = Album.query();

let album = Photo.findById();
let album = Photo.findByIds();
let album = Photo.insideAlbumId()
let album = Photo.query()