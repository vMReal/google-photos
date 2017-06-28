import { clone } from 'lodash';
import { Observer, Observable} from 'rxjs';
import {QueryBuilder, Bbox, PHOTO_MARKER} from "./components/query-builder";
import {UrlBuilder} from "./components/url-builder";
import {Response} from "./components/response";
import {RequestResponse, RequestAPI} from "request";
import {Error} from "./components/error";
import {Parser} from "./components/parser";
import {FieldMap, FieldsMap, FIELDS_MAPS_CONFIGS} from "./components/fields-map";

export const KIND = {
    ALBUM: 'album',
    PHOTO: 'photo',
}

export class Query {

    protected queryBuilder: QueryBuilder;
    protected urlBuilder: UrlBuilder;
    protected bearToken: string = '';
    protected fields: string[];


    public constructor(urlBuilder: UrlBuilder, kind: string) {
        this.urlBuilder = urlBuilder;
        this.queryBuilder = new QueryBuilder();
        this.queryBuilder.setParams({kind: kind});
    }

    public auth(bearToken: string) {
        this.bearToken = bearToken;
    }

    public limit(limit: number): this {
        this.queryBuilder.setParams({ limit: limit });
        return this;
    }

    public offset(offset: number): this {
        this.query.setParams({ offset: offset });
        return this;
    }

    public byExactPhrase(phrase: string): this {
        this.queryBuilder.setParams({ exactPhrase: phrase });
        return this;
    }

    public byAbsenceWord(word: string): this {
        this.queryBuilder.setParams({ without_word: word });
        return this;
    }

    public byWold(word: string): this {
        this.queryBuilder.setParams({ word: word });
        return this;
    }

    public byBbox(bbox: Bbox): this {
        this.queryBuilder.setParams({ bbox: Bbox });
        return this;
    }

    public byLocationName(name: string): this {
        this.queryBuilder.setParams({ location: name });
        return this;
    }

    public returnPhoto(size: number): this {
        this.queryBuilder.setParams({
            photo: {size: size, marker: PHOTO_MARKER.UNCROPPED}
        });
        return this;
    }

    public returnCroppedPhoto(size: number): this {
        this.queryBuilder.setParams({
            photo: {size: size, marker: PHOTO_MARKER.CROPPED}
        });
        return this;
    }

    public returnOriginPhoto(): this {
        this.queryBuilder.setParams({
            photo: {size: null, marker: PHOTO_MARKER.ORIGINAL}
        });
        return this;
    }

    public returnThumbnail(size: number): this {
        this.queryBuilder.setParams({
            photo: {size: size, marker: PHOTO_MARKER.UNCROPPED}
        });
        return this;
    }

    public returnCroppedThumbnail(size: number): this {
        this.queryBuilder.setParams({
            photo: {size: size, marker: PHOTO_MARKER.CROPPED}
        });
        return this;
    }

    public returnGeoData(size: number): this {
        return this;
    }

    public execute(): Observable<Response> {
        let fieldsMap: FieldsMap = FieldsMap(FIELDS_MAPS_CONFIGS, this.fields);
        this.queryBuilder.setParams({fields: fieldsMap.requestedFields});

        return new Observable((observer: Observer<Response>) => {
            let query: Query = clone(this);
            RequestAPI
                .get(
                    `${ this.urlBuilder.getUrl() }?${ query.queryBuilder.getQueryString() }`,
                    (err: any, res: RequestResponse, body: any) => {
                        if (err)
                            return observer.error( new Error(null, 'Incorrect configuration', err) );

                        if( (res.statusCode < 200 || res.statusCode > 299) && res.statusCode != 304)
                            observer.error( new Error(res.statusCode , body || res.statusMessage, {}) );

                        let parser = Parser(body);
                        observer.next(new Response(parser));
                    }).auth(null, null, true, this.bearToken);
        });
    }
}

