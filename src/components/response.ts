
import { isArray, isUndefined } from "lodash";
import {Entity} from "../entity";
import {Photo} from "../photo";
import {Album} from "../album";
import {FieldsMap, IItem, IMeta} from "./fields-map";



export class Response {

    protected items: IItem[] = [];
    protected meta: IMeta = {};


    constructor(body: any, fieldMap: FieldsMap)
    {
        this.meta = fieldMap.extractResponse(body);
        this.items = fieldMap.extractEntities(body)
    }


    public toArray(): Album[] | Photo[] | IItem[] {
        return this.items;
    }

    public toObject(): Album | Photo | IItem {
        return (isUndefined(this.items[0]))
            ? null
            : this.items[0];
    }
}