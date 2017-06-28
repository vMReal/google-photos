import {concat} from "lodash";


export const FIELDS = {
    TITLE: 'title',
}

export const FIELDS_MAPS_CONFIGS: FieldsMapConfig[] = [

]

export class FieldsMap {

    protected configs: IFieldsMapConfig[] = [];

    protected rootRelations: FieldRelation[];
    protected entityRelations: FieldRelation[];
    protected xpathCollection: string[];
    protected scopes: string[];

    constructor(protected configs: FieldsMapConfig[], scopes: string[]) {
        for (let config of configs) {
            let configObject : IFieldsMapConfig = config.toObject();
            if (scopes.indexOf(configObject.scope) !== -1)
                this.configs.push(configObject);
        }

        for (let config of this.configs) {
            this.xpathCollection.push(config.xpath);
            this.scopes.push(config.scope);
            this.rootRelations = concat(this.rootRelations, config.rootRelations);
            this.entityRelations = concat(this.entityRelations, config.entityRelations);
        }
    }

    get rootRelations(): FieldRelation[] {
        return this.rootRelations;
    }

    get entityRelations(): FieldRelation[] {
        return this.entityRelations;
    }

    get requestedFields(): string {
        return this.xpathCollection.join(',');
    }
}

export class FieldsMapConfig {
    protected rootRelations: FieldRelation[] = [];
    protected entityRelations: FieldRelation[] = [];
    protected xpath: string = '';


    public static createByScope(scope: string): FieldsMapConfig {
        return new this(scope);
    }

    protected constructor(protected scope: string) {
        return this;
    }

    public rootRelation(relations: FieldRelation[]): this {
        this.rootRelations = concat(this.rootRelations, relations);
        return this;
    }

    public entityRelation(relations: FieldRelation[]): this {
        this.entityRelations = concat(this.entityRelations, relations);
        return this;
    }

    public select(xpath: string): this {
        this.xpath = xpath;
        return this;
    }

    public toObject(): IFieldsMapConfig {
        return {
            rootRelations: this.rootRelations,
            entityRelations: this.entityRelations,
            xpath: this.xpath,
            scope: this.scope
        }
    }
}


export class FieldRelation {

    protected optional: boolean = false;

    protected constructor(protected newPath: string, protected originPath: string) {

    }

    public static add(newPath: string, originPath: string): FieldRelation {
        return new this(newPath, originPath);
    }

    public optional(): this {
        this.optional = true;
        return this;
    }
}


interface IFieldsMapConfig {
    rootRelations: FieldRelation[],
    entityRelations: FieldRelation[],
    xpath: string,
    scope: string,
};

