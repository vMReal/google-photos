import { clone } from 'lodash';
import { Observer, Observable} from 'rxjs';
import {QueryBuilder, PHOTO_MARKER} from "./components/query-builder";
import {UrlBuilder} from "./components/url-builder";
import {Response} from "./components/response";
import {RequestResponse, RequestAPI} from "request";
import {Error} from "./components/error";
import {FieldsMap, FIELDS_MAPS_CONFIGS} from "./components/fields-map";

export const KIND = {
    ALBUM: 'album',
    PHOTO: 'photo',
}

export class Query {

    protected queryBuilder: QueryBuilder;
    protected urlBuilder: UrlBuilder;
    protected bearToken: string = '';
    protected fields: string[];


    public constructor(urlBuilder: UrlBuilder, kind: string = null) {
        this.urlBuilder = urlBuilder;
        this.queryBuilder = new QueryBuilder();

        if (kind)
            this.queryBuilder.setParams({kind: kind});
    }

    public auth(bearToken: string) {
        this.bearToken = bearToken;
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
                    (err: any, res: RequestResponse, originBody: any) => {
                        if (err)
                            return observer.error( new Error(null, 'Incorrect configuration', err) );

                        if( (res.statusCode < 200 || res.statusCode > 299) && res.statusCode != 304)
                            observer.error( new Error(res.statusCode , body || res.statusMessage, {}) );


                        try {
                            var body: any = JSON.parse(originBody);
                        } catch (err) {
                            return observer.error( new Error(null, 'Unexpected error daring parsing', {}) );
                        }

                        observer.next(new Response(body, fieldsMap));
                    }).auth(null, null, true, this.bearToken);
        });
    }
}

