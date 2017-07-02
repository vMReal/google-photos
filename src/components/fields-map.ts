import {concat} from "lodash";


export const FIELDS = {
    TITLE: 'title',
}

export const FIELDS_MAPS_CONFIGS: IFieldsMapConfig[] = [

]


export interface IFieldsMapConfig {
    rootRelations: IFieldRelation[]
    entityRelations: IFieldRelation[]
    xpath: string,
    scope: string,
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
}


