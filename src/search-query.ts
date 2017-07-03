
import {Bbox} from "./components/query-builder";
import {Query} from "./query";

export const KIND = {
    ALBUM: 'album',
    PHOTO: 'photo',
}

export class SearchQuery extends Query {

    public limit(limit: number): this {
        this.queryBuilder.setParams({ limit: limit });
        return this;
    }

    public offset(offset: number): this {
        this.queryBuilder.setParams({ offset: offset });
        return this;
    }

    public byExactPhrase(phrase: string): this {
        this.queryBuilder.setParams({ exact_phrases: [phrase] });
        return this;
    }

    public byAbsenceWord(word: string): this {
        this.queryBuilder.setParams({ without_words: [word] });
        return this;
    }

    public byWold(word: string): this {
        this.queryBuilder.setParams({ words: [word] });
        return this;
    }

    public byBbox(bbox: Bbox): this {
        this.queryBuilder.setParams({ bbox: bbox });
        return this;
    }

    public byLocationName(name: string): this {
        this.queryBuilder.setParams({ location: name });
        return this;
    }
}

