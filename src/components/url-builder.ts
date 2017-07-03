
export const PROJECTION = {
    API: 'api',
    BASE: 'base'
}
const BASE_URL = 'https://picasaweb.google.com/data/feed';
export const USER_OWNER = 'default';


export class UrlBuilder {

    protected userId: string = USER_OWNER;
    protected projection: string = PROJECTION.API;
    protected albumId: string;
    protected photoId: string;

    public setProjection(projection: string) {
        this.projection = projection;
    }

    public setUser(id: string) {
        this.userId = id;
    }

    public setAlbumId(id: string) {
        this.albumId = id;
    }

    public setPhotoId(id: string) {
        this.albumId = id;
    }

    public getUrl(): string {
        let url: string = BASE_URL;

        url += `/${this.projection}`;
        url += `/user/${this.userId}`;

        if (this.albumId)
            url += `/albumid/${this.albumId}`;

        if (this.photoId)
            url += `/photoid/${this.photoId}`;

        return url;
    }
}