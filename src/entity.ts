

export class Entity {

    protected static bearToken: string = '';

    public static auth(bearToken: string) {
        this.bearToken = bearToken;
    }
}