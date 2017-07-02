import {concat, set as setData, get as getData, has } from "lodash";


export enum Scope {
    User,
    Entity,
    Photo,
    Gdata

}

export const FIELDS_MAPS_CONFIGS: IFieldsMapConfig[] = [
    {
        scope: Scope.Entity,
        xpath: 'entry(gphoto:id)',
        rootRelations: [],
        entityRelations: [
            { originPath: 'gphoto$id', path: 'id', optional: false}
        ],
    }

];


export interface IFieldsMapConfig {
    rootRelations: IFieldRelation[]
    entityRelations: IFieldRelation[]
    xpath: string,
    scope: number,
}

export interface IFieldRelation {
    originPath: string,
    path: string,
    optional: boolean,
}

export class FieldsMap {

    protected configs: IFieldsMapConfig[] = [];

    protected rootRelations: IFieldRelation[];
    protected entityRelations: IFieldRelation[];
    protected xpathCollection: string[];
    protected requestedScopes: string[];
    protected scopes: string[];

    constructor(protected configs: IFieldsMapConfig[], scopes: string[]) {
        this.requestedScopes = scopes;
        for (let config of configs) {
            if (scopes.indexOf(config.scope) !== -1)
                this.configs.push(config);
        }

        for (let config of this.configs) {
            this.xpathCollection.push(config.xpath);
            this.scopes.push(config.scope);
            this.rootRelations = concat(this.rootRelations, config.rootRelations);
            this.entityRelations = concat(this.entityRelations, config.entityRelations);
        }
    }

    get rootRelations(): IFieldRelation[] {
        return this.rootRelations;
    }

    get entityRelations(): IFieldRelation[] {
        return this.entityRelations;
    }

    get requestedFields(): string {
        return this.xpathCollection.join(',');
    }


    public extractEntities(data): IItem[] {
        let entities: IItem[];
        for (let originEntity of data.entities) {;
            entities.push( this.extract<IItem>(originEntity, this.entityRelations) );
        }
        return entities;
    }

    public extractResponse(data): IMeta {
        return this.extract<IMeta>(data, this.rootRelations);
    }

    protected extract<T>(data: any, relations: IFieldRelation[]) {
        let res: T;
        for (let relation of relations) {
            if (has(data, relation.originPath))
                setData(res, relation.path, getData(data, relation.originPath));
        }
    }
}


export interface IItem{

}


export interface IMeta {

}


