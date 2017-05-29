import { Promise } from 'promise';
import { Observer, Observable} from 'rxjs';
import {QueryBuilder, Bbox, PHOTO_MARKER} from "./components/query-builder";
import {UrlBuilder} from "./components/url-builder";
import {Response} from "./components/response";



export class Query {

    private query: QueryBuilder;
    private urlBuilder: UrlBuilder;


    public constructor(urlBuilder: UrlBuilder) {
        this.query = new QueryBuilder();
        this.urlBuilder = urlBuilder;
    }

    public limit(limit: number): this {
        this.query.setParams({ limit: limit });
        return this;
    }

    public offset(offset: number): this {
        this.query.setParams({ offset: offset });
        return this;
    }

    public byExactPhrase(phrase: string): this {
        this.query.setParams({ exactPhrase: phrase });
        return this;
    }

    public byAbsenceWord(word: string): this {
        this.query.setParams({ without_word: word });
        return this;
    }

    public byWold(word: string): this {
        this.query.setParams({ word: word });
        return this;
    }

    public byBbox(bbox: Bbox): this {
        this.query.setParams({ bbox: Bbox });
        return this;
    }

    public byLocationName(name: string): this {
        this.query.setParams({ location: name });
        return this;
    }

    public returnPhoto(size: number): this {
        this.query.setParams({
            photo: {size: size, marker: PHOTO_MARKER.UNCROPPED}
        });
        return this;
    }

    public returnCroppedPhoto(size: number): this {
        this.query.setParams({
            photo: {size: size, marker: PHOTO_MARKER.CROPPED}
        });
        return this;
    }

    public returnOriginPhoto(): this {
        this.query.setParams({
            photo: {size: null, marker: PHOTO_MARKER.ORIGINAL}
        });
        return this;
    }

    public returnThumbnail(size: number): this {
        this.query.setParams({
            photo: {size: size, marker: PHOTO_MARKER.UNCROPPED}
        });
        return this;
    }

    public returnCroppedThumbnail(size: number): this {
        this.query.setParams({
            photo: {size: size, marker: PHOTO_MARKER.CROPPED}
        });
        return this;
    }

    public returnGeoData(size: number): this {
        return this;
    }

    public execute(bearToken: string): Observable<Response> {
        return new Observable((observer: Observer<Response>) => {

        });
    }
}




let query = Query.byToken('bearToken')
    .withoutWold('Cat')
    .withExactPhrase('Maine Coon')
    .withoutWold('eat')

    .byLocationName('Ukraine')
    .byBbox([-35.55, 35.55, -94.44, 55])

    .addThumbnail(1600)
    .addCroppedThumbnail(800)
    .addOriginPhoto()

    .limit(100);


query.limit(100).findPhotos();
query.shift().findPhotos();
query.shift().findPhotos();
query.shift().findPhotos();
query.shift().findPhotos();


let album = Album.findById();
let album = Album.findByIds();
let album = Album.query();

let album = Photo.findById();
let album = Photo.findByIds();
let album = Photo.insideAlbumId()
let album = Photo.query()
