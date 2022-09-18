export interface IAllBooks {
    count: string;
    next: string;
    previous: string;
    results: IBook[]
}

export interface IBook {
    authors: [];
    bookshelves: [];
    download_count: string;
    formats: {};
    id: number;
    languages: [];
    media_type: string;
    subjects: [];
    title: string
}