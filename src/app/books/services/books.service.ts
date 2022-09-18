import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IAllBooks } from './../models/books';

@Injectable({
  providedIn: 'root'
})
export class BooksService {

  constructor(private http: HttpClient) { }

  public getBooks(): any {
    const url = 'http://skunkworks.ignitesol.com:8000/books/';
    return this.http.get(url);
  }

}
