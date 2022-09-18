import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Button} from '../../classes/button';
import { BooksService } from '../../services/books.service';
import { IAllBooks, IBook } from '../../models/books';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-seach-book',
  templateUrl: './seach-book.component.html',
  styleUrls: ['./seach-book.component.scss']
})
export class SearchBookComponent implements OnInit {
	
	@Output() scrollingFinished = new EventEmitter<void>();
	
	public books: IBook[] | undefined;
	public buttons: Button[] = [];
	public selectedCategory: string | undefined;
	public stateData: any;
	public page = 1;

	constructor(
		private booksService: BooksService,
		private location: Location,
		private route: ActivatedRoute,
		private router: Router) {
			this.stateData = router.getCurrentNavigation();
	}

	ngOnInit() {
		this.selectedCategory = this.stateData.extras.state?.['category'];
		this.booksService.getBooks().subscribe(
			(response: IAllBooks) => {
				let data = response.results;
			  
				console.log('data');
				console.log(data);

				let categoryBooks = data?.filter((book: any) => {
					let searchedCategories = book?.bookshelves?.filter((category: any) => category.includes(this.selectedCategory));
					let searchedSubjects = book?.subjects?.filter((subject: any) => subject.includes(this.selectedCategory));
					if (searchedCategories.length > 0 || searchedSubjects.length > 0) {
						return book;
					}
				});

				let booksWithCovers = categoryBooks.filter(book => book.formats.hasOwnProperty('image/jpeg'));
				this.books = booksWithCovers;
			});
	}
	
	public goBack(): void {
		this.location.back();
	}

	public onScrollingFinished(): void {
		this.booksService.getBooks(++this.page).subscribe(
			(response: IAllBooks) => {
				let data = response.results;
				for (let i = 0; i < data.length; i++) {
					this.books?.push(data[i]);
				}
				let categoryBooks = this.books?.filter((book: any) => {
					let searchedCategories = book?.bookshelves?.filter((category: any) => category.includes(this.selectedCategory));
					let searchedSubjects = book?.subjects?.filter((subject: any) => subject.includes(this.selectedCategory));
					if (searchedCategories.length > 0 || searchedSubjects.length > 0) {
						return book;
					}
				});

				let booksWithCovers = categoryBooks?.filter(book => book.formats.hasOwnProperty('image/jpeg'));
				this.books = booksWithCovers;	
			});			
	}
}
