

import {Parser} from "./parser";
import { isArray, isUndefined } from "lodash";
import {Entity} from "../entity";
import {Album, Photo} from "../photo";


export class Response {


    protected items: Entity[] = [];
    protected totalCount: number;

    constructor(parser: Parser)
    constructor(responses: Response[])
    constructor(res: Parser | Response[])
    {
        if (res instanceof Parser)
            this.extractParser(res);
        else if (isArray(res) && res[0] instanceof Response)
            this.extractResponses(res);
        else
            console.error('Unsupported type of argument');
    }


    protected extractParser(parser: Parser) {

    }

    protected extractResponses(responses: Response[]) {

    }

    public toArray(): Album[] | Photo[] {
        return this.items;
    }

    public toObject(): Album | Photo {
        return (isUndefined(this.items[0]))
            ? null
            : this.items[0];
    }

    public get count(): number {
        return this.items.length;
    }

    public get totalCount(): number {
        return this.totalCount;
    }
}