import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IAllBooks } from './../models/books';
import { BehaviorSubject } from 'rxjs';

@Injectable({
	providedIn: 'root'
})
export class BooksService {

	private categoriesSubject = new BehaviorSubject<Array<string>>([]);
	categories$ = this.categoriesSubject.asObservable();
	categories: Array<string> = [];

	constructor(private http: HttpClient) { }

	public getBooks(next?: number): any {
		const url = `http://skunkworks.ignitesol.com:8000/books/?page=${next || 1}`;
		return this.http.get(url);
	}

  
	public loadMore(n: number): void {
		this.getBooks(n);
	}

}
