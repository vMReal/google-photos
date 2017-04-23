import lodash from 'lodash';


export interface IParam {
    access?: string,
    alt?: string,
    bbox?: string,
    fields?: string,
    imgmax?: string,
    kind?: string,
    l?: string,
    'max-results'?: number,
    prettyprint?: string,
    q?: string,
    'start-index'?: number,
    thumbsize?: string,
    l?: string,
}

export class QueryBuilder {

    private params: IParam = {};

    constructor()


    public extendParams(params: IParam, separator: string = null) {
        if (!separator)
            return this.params = lodash.extend(this.params, params);

        for (let key in params ) {
            if (lodash.isEmpty(this.params[key]))
                this.params[key] = params[key];
            else
                this.params[key] += separator + params[key]
        }
    }

    public getQueryString(): string {

    }

    public getUrl(linkParams: Object) {

    }

    public getFullUrl
}