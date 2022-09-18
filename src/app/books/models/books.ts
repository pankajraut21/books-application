export interface IAllBooks {
    count: string;
    next: string;
    previous: string;
    results: IBook[]
}

export interface IAuthor {
    birth_year: number;
    death_year: number;
    name: string;
}

export interface IBook {
    authors: IAuthor[];
    bookshelves: [];
    download_count: string;
    formats: {
        'image/jpeg'?: string
    };
    id: number;
    languages: [];
    media_type: {};
    subjects: [];
    title: string;
    imageUrl?: string
}

export interface IPageInfo {
    title: string;
    description: string;
}
