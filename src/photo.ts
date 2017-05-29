import {Observer, Observable} from 'rxjs';
import {UrlBuilder, PROJECTION} from "./components/url-builder";
import {Query} from "./pwa";
import {Response} from "./components/response";
import {Entity} from "./entity";

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


export class Album extends Entity {

    public static findById(id: string): Observable<Response> {
        let urlBuilder = new UrlBuilder();
        urlBuilder.setProjection(PROJECTION.API);
        urlBuilder.setAlbumId(id);

        let query = new Query(urlBuilder);
        return query.execute(this.bearToken);
    }

    public static findByIds(ids: string[]): Observable<Response> {

        let urlBuilder = new UrlBuilder();
        urlBuilder.setProjection(PROJECTION.API);
        urlBuilder.setAlbumId(id);

        let query = new Query(urlBuilder);
        return query.execute(this.bearToken);

    }


    public static query(): Query {
        let urlBuilder = new UrlBuilder();
        urlBuilder.setProjection(PROJECTION.API);
        urlBuilder.setAlbumId(id);

        return new Query(urlBuilder);
    }
}


let album = Album.findById();
let album = Album.findByIds();
let album = Album.query();

let album = Photo.findById();
let album = Photo.findByIds();
let album = Photo.insideAlbumId()
let album = Photo.query()