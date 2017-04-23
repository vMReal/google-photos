import { Promise } from 'promise';


export class PWA {

    constructor(bearToken: string) {

    }

    public select(): PWA {
        return this;
    }

    public limit(): PWA {
        return this;
    }

    public offset(): PWA {
        return this;
    }

    public withExactPhrase(): PWA {
        return this;
    }

    public withWorld(): PWA {
        return this;
    }

    public withoutWorld(): PWA {
        return this;
    }

    public byBbox(): PWA {
        return this;
    }

    public byLocationName(): PWA {
        return this;
    }

    public addPhoto(): PWA {
        return this;
    }

    public addCroppedPhoto(): PWA {
        return this;
    }

    public addOriginPhoto(): PWA {
        return this;
    }

    public addThumbnail(): PWA {
        return this;
    }

    public addCroppedThumbnail(): PWA {
        return this;
    }

    findPhoto(id: string) {

    }

    findPhotos(albumId: string = null): Promise<PhotoCollection> {
        return new Promise((resolver, reject) => {

        });
    }

    findAlbum(id: string) {

    }

    findAlbums() {

    }
}


export declare type Items = [Album | Photo] ;


export interface Result {
    meta: {
        limit: number,
        skip: number,
        total: number,
        returned: number,
    },
    items: Items,
}

export interface Photo {
    original_photo: string;
}

export interface Album {
    original_photo: string;
}