import {UrlBuilder, PROJECTION} from "./components/url-builder";
import {Query, KIND} from "./query";
import {Response} from "./components/response";
import {Entity} from "./entity";
import {SearchQuery} from "./search-query";

export class Photo extends Entity {

    protected static albumId: string = null;

    public static findById(id: string): Query {
        let urlBuilder = new UrlBuilder();
        urlBuilder.setProjection(PROJECTION.API);
        urlBuilder.setPhotoId(id);
        if (this.albumId)
            urlBuilder.setAlbumId(this.albumId);

        let query = new Query(urlBuilder);
        query.auth(this.bearToken);
        return query;
    }


    public static query(): SearchQuery {
        let urlBuilder: UrlBuilder = new UrlBuilder();
        urlBuilder.setProjection(PROJECTION.API);
        if (this.albumId)
            urlBuilder.setAlbumId(this.albumId);

        let query = new SearchQuery(urlBuilder, KIND.PHOTO);
        query.auth(this.bearToken);
        return query;
    }

    public static insideAlbumId(id: string): this {
        this.albumId = id;
        return this
    }
}