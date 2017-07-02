import {UrlBuilder, PROJECTION} from "./components/url-builder";
import {Query, KIND} from "./query";
import {Entity} from "./entity";
import {SearchQuery} from "./search-query";


export class Album extends Entity {

    public static findById(id: string): Query {
        let urlBuilder = new UrlBuilder();
        urlBuilder.setProjection(PROJECTION.API);
        urlBuilder.setAlbumId(id);

        let query = new Query(urlBuilder, KIND.ALBUM);
        query.auth(this.bearToken);
        return query;
    }


    public static query(): SearchQuery {
        let urlBuilder: UrlBuilder = new UrlBuilder();
        urlBuilder.setProjection(PROJECTION.API);
        let query = new SearchQuery(urlBuilder, KIND.ALBUM);
        query.auth(this.bearToken);
        return query;
    }
}