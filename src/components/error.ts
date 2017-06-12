
export class Error {

    public httpCode: number | null;

    public message: string = '';

    constructor(httpCode: number | null, message: string = '', details: any = {}) {
        this.httpCode = httpCode;
        this.message = message;
    }


    public isInternal(): boolean {
        return (this.httpCode === null)
    }
}