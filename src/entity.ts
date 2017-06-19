

export class Entity {

    protected static bearToken: string = '';

    public static auth(bearToken: string) {
        this.bearToken = bearToken;
    }

    public  json: any = {
        id: '',
        albumId: '',
        meta: {
            width: '',
            height: '',
            size: '',
            rotation: '?',
            timestamp: 'create_at',
            albumtitle: '?',
            albumdesc: '?',
        },

    }


    /*
     gphoto: {
         user: 'int',
         nickname: 'string',
         quotalimit: 'inst size',
         quotacurrent: 'inst size',
     }

     */

    public user: {
        id: 'number'
        nickname: 'string'
    }

    public quota: {
        limit: 'number',
        current: 'number'
    }
}