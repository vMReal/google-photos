
export const PROJECTION = {
    API: 'api',
    BASE: 'base'
}

export const USER_OWNER = 'default';

export const BASE_URL = 'https://picasaweb.google.com/data/feed';

const TEMPLATE_URL = {
    BASE: 'projection/user/userID/albumid/albumID/photoid/photoID',
    BY_ALBUM: '',
}

export class UrlBuilder {

    public userId: string = USER_OWNER;
    public projection: string = PROJECTION.API;
    public albumId: string;
    public photoId: string;

    public setProjection(projection: string) {

    }

    public setUser(id: string) {

    }

    public setAlbumId(id: string) {

    }

    public setPhotoId(id: string) {

    }

    public getUrl(): string {
        let url: string = BASE_URL;

        url += `/${this.projection}`;
        url += `/user/${this.projection}`;

        if (this.albumId)
            url += `/albumid/${this.albumId}`;

        if (this.albumId)
            url += `/photoid/${this.photoId}`;

        return url;
    }
}