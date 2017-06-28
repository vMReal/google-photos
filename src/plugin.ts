
export abstract class Plugin {
    public abstract getId(): string;

    public abstract getDependencies(): string[];

    public extend<T>(header: any, data: any, res: T, next: (err: string, res: T)=>void ) {
        next(null, res);
    }
}