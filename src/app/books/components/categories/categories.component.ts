import { Component, OnInit } from '@angular/core';
import { Button} from '../../classes/button';
import { BooksService } from '../../services/books.service';
import { IAllBooks, IBook } from '../../models/books';
import { Router, ActivatedRoute } from '@angular/router'; 

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent implements OnInit {
	public title = 'books';
	public books: IBook[] | undefined;
	public buttons: Button[] = [];

	constructor(
		private router: Router,
		private route: ActivatedRoute,
		private booksService: BooksService) {
	}

	ngOnInit() {
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
		console.log(button.buttonText);
		console.log(this.books);
		let categoryBooks = this.books?.filter((book: any) => {
			let searchedCategories = book?.bookshelves?.filter((category: any) => category.includes(button.buttonText));
			let searchedSubjects = book?.subjects?.filter((subject: any) => subject.includes(button.buttonText));
			if (searchedCategories.length > 0 || searchedSubjects.length > 0) {
				return book;
			}
		});
		console.log(categoryBooks);
		const data = {
			category: button.buttonText,
			data: categoryBooks
		}
		// this.router.navigate(['items'], { relativeTo: this.route });
		this.router.navigate(['books/seachBook'], { state: data });
	}
}
