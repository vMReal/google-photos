import {UrlBuilder, PROJECTION} from "./components/url-builder";
import {Query, KIND} from "./query";
import {Entity} from "./entity";
import {SearchQuery} from "./search-query";


export class Album {

    public static findById(id: string): Query {
        let urlBuilder = new UrlBuilder();
        urlBuilder.setProjection(PROJECTION.API);
        urlBuilder.setAlbumId(id);

        let query: Query  = new Query(urlBuilder, KIND.ALBUM);
        return query;
    }


    public static query(): SearchQuery {
        let urlBuilder: UrlBuilder = new UrlBuilder();
        urlBuilder.setProjection(PROJECTION.API);
        let query = new SearchQuery(urlBuilder, KIND.ALBUM);
        return query;
    }
}