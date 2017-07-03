import {UrlBuilder, PROJECTION} from "./components/url-builder";
import {Query, KIND} from "./query";
import {Response} from "./components/response";
import {Entity} from "./entity";
import {SearchQuery} from "./search-query";

export class Photo {


    public static findById(id: string , albumId: string = null): Query {
        let urlBuilder = new UrlBuilder();
        urlBuilder.setProjection(PROJECTION.API);
        urlBuilder.setPhotoId(id);
        if (albumId)
            urlBuilder.setAlbumId(albumId);

        let query = new Query(urlBuilder);
        return query;
    }


    public static query(albumId: string = null): SearchQuery {
        let urlBuilder: UrlBuilder = new UrlBuilder();
        urlBuilder.setProjection(PROJECTION.API);
        if (albumId)
            urlBuilder.setAlbumId(albumId);

        let query = new SearchQuery(urlBuilder, KIND.PHOTO);
        return query;
    }
}