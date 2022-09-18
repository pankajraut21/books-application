import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BooksRoutingModule } from './books-routing.module';
import { CategoriesComponent } from './components/categories/categories.component';
import { BooksService } from './services/books.service';
import { SearchBookComponent } from './components/seach-book/seach-book.component';
import { BooksComponent } from './books.component';


@NgModule({
	declarations: [
		BooksComponent,
		CategoriesComponent,
		SearchBookComponent
	],
	imports: [
		CommonModule,
		BooksRoutingModule
	],
	providers: [
		BooksService
	]
})
export class BooksModule { }
