import { uniq, isEmpty, isUndefined, merge } from 'lodash';


export declare type Bbox = [number, number, number, number];

export const PHOTO_MARKER = {
    CROPPED: 'c',
    UNCROPPED: 'u',
    ORIGINAL: 'd'
}


export interface IPhotoSettings {
    size: number,
    marker: string,
}

export interface IParam {
    access?: string,
    alt?: string,
    bbox?: Bbox,
    fields?: string[],
    photo?: IPhotoSettings,
    thumbnails?: IPhotoSettings[],
    kind?: string,
    location?: string,
    limit?: number,
    prettyprint?: boolean,
    words?: string[],
    without_words?: string[],
    exact_phrases?: string[],
    offset?: number,
}

export class QueryBuilder {

    private params: IParam = {
        alt: 'json'
    };


    public setParams(params: IParam) {
        this.params = merge(this.params, params)
    }

    public getQueryString(): string {
        let query: string = '';

        if (!isUndefined(this.params.words) || !isUndefined(this.params.without_words) || !isUndefined(this.params.exact_phrases))
            query += `q=${ encodeURIComponent( this.searchBuilder(this.params.words, this.params.without_words, this.params.exact_phrases) ) }`;

        for (let key in this.params) {
            switch (key) {
                case 'access':
                case 'alt':
                case 'kind':
                case 'prettyprint':
                    query += `${key}=${ encodeURIComponent(this.params[key]) }`;
                    break;
                case 'location':
                    query += `l=${ encodeURIComponent(this.params.location) }`;
                    break;
                case 'limit':
                    query += `max-results=${ encodeURIComponent(String(this.params.limit)) }`;
                    break;
                case 'offset':
                    query += `start-index=${ encodeURIComponent(String(this.params.offset)) }`;
                    break;
                case 'bbox':
                    query += `bbox=${ encodeURIComponent((<number[]> this.params.bbox).join(',')) }`;
                    break;
                case 'fields':
                    query += `fields=${ encodeURIComponent( this.fieldsBuilder(this.params[key]) ) }`;
                    break;
                case 'photo':
                    query += `imgmax=${ encodeURIComponent(this.photoBuilder(this.params.photo)) }`;
                    break;
                case 'thumbnails':
                    query += `thumbsize=${ encodeURIComponent(this.thumbnailsBuilder(this.params.thumbnails)) }`;
                    break;
            }
        }
        return query;
    }


    private fieldsBuilder(fields: string[]): string {
        return '';
    }

    private photoBuilder(photo: IPhotoSettings): string { //@TODO add waring by sizes
        return '';
    }

    private thumbnailsBuilder(thumbnails: IPhotoSettings[]): string { //@TODO add waring by sizes
        return '';
    }

    private searchBuilder(words: string[] = [], withoutWords: string[] = [], exactPhrase : string[] = []): string {
        return '';
    }
}