import { Component, OnInit } from '@angular/core';
import { Button} from '../../classes/button';
import { BooksService } from '../../services/books.service';
import { IAllBooks, IBook, IPageInfo } from '../../models/books';
import { Router, ActivatedRoute } from '@angular/router'; 

@Component({
	selector: 'app-categories',
	templateUrl: './categories.component.html',
	styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent implements OnInit {
	public page: IPageInfo | undefined;
	public books: IBook[] | undefined;
	public buttons: Button[] = [];

	constructor(
		private router: Router,
		private route: ActivatedRoute,
		private booksService: BooksService) {
	}

	ngOnInit() {
		this.page = {
			title: "Gutenberg Project",
			description: "A social cataloging website that allows you to freely search its database of books, annotations, and reviews."
		}

		this.initializeButtons();
		this.booksService.getBooks().subscribe(
			(response: IAllBooks) => {
			  this.books = response.results;
			});
	}

	private initializeButtons(): Button[] {
		const fiction = {
			iconName: 'Fiction.svg',
			buttonText: 'Fiction',
			disabled: false
		} as Button;

		const drama = {
			iconName: 'Drama.svg',
			buttonText: 'Drama',
			disabled: false
		} as Button;

		const humour = {
			iconName: 'Humour.svg',
			buttonText: 'Humor',
			disabled: false
		} as Button;

		const politics = {
			iconName: 'Politics.svg',
			buttonText: 'Politics',
			disabled: false
		} as Button;

		const philosophy = {
			iconName: 'Philosophy.svg',
			buttonText: 'Philosophy',
			disabled: false
		} as Button;

		const history = {
			iconName: 'History.svg',
			buttonText: 'History',
			disabled: false
		} as Button;

		const adventure = {
			iconName: 'Adventure.svg',
			buttonText: 'Adventure',
			disabled: false
		} as Button;

		this.buttons = [fiction, drama, humour, politics, philosophy, history, adventure]

		return this.buttons;
	}

	public getBooks(button: Button) {
		const data = {
			category: button.buttonText
		}
		this.router.navigate(['books/seachBook'], { state: data });
	}
}
