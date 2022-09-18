import { Component, OnInit } from '@angular/core';
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
	public books: IBook[] | undefined;
	public buttons: Button[] = [];
	public selectedCategory: string | undefined;
	public stateData: any;

	constructor(
		private booksService: BooksService,
		private location: Location,
		private route: ActivatedRoute,
		private router: Router) {
			this.stateData = router.getCurrentNavigation();
	}

	ngOnInit() {
		this.selectedCategory = this.stateData.extras.state?.['category'];
		console.log('this.stateData.extras.state');
		console.log(this.stateData.extras.state);
		console.log('this.selectedCategory');
		console.log(this.selectedCategory);
		
		this.booksService.getBooks().subscribe(
			(response: IAllBooks) => {
			  this.books = response.results;
			});
	}
	
	public goBack() {
		this.location.back();
	}

}
