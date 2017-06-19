import {Observer, Observable} from 'rxjs';
import {UrlBuilder, PROJECTION} from "./components/url-builder";
import {Query, KIND} from "./query";
import {Response} from "./components/response";
import {Entity} from "./entity";
import {Error} from "./components/error";


export class Album extends Entity {

    public static findById(id: string): Observable<Response> {
        let urlBuilder = new UrlBuilder();
        urlBuilder.setProjection(PROJECTION.API);
        urlBuilder.setAlbumId(id);

        let query = new Query(urlBuilder, KIND.ALBUM);
        query.auth(this.bearToken);
        return query.execute();
    }

    public static findByIds(ids: string[]): Observable<Response> {

        let urlBuilder = new UrlBuilder();
        urlBuilder.setProjection(PROJECTION.API);
        let sources: Observable<Response> [] = [];
        for (let id of ids) {
            urlBuilder.setAlbumId(id);
            sources.push( new Observable<Response>((observer: Observer<Response>) => {
                let query = new Query(urlBuilder, KIND.ALBUM);
                query.auth(this.bearToken);
                query.execute().subscribe(
                    (res: Response) => {
                        observer.next(res);
                        observer.complete();
                    },
                    (err: Error) => {
                        if (!err.isInternal() && err.httpCode == 404)
                            return observer.complete();;
                        observer.error(err);
                        observer.complete();
                    });
            }));
        }
        return Observable.forkJoin(sources).map((responses: Response[]) => {
            return new Response(responses);
        });
    }


    public static query(): Query {
        let urlBuilder: UrlBuilder = new UrlBuilder();
        urlBuilder.setProjection(PROJECTION.API);
        let query = new Query(urlBuilder, KIND.ALBUM);
        query.auth(this.bearToken);
        return query;
    }
}