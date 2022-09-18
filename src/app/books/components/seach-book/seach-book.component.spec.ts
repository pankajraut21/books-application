import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SearchBookComponent } from './seach-book.component';

describe('CategoriesComponent', () => {
	let component: SearchBookComponent;
	let fixture: ComponentFixture<SearchBookComponent>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			declarations: [ SearchBookComponent ]
		})
			.compileComponents();

		fixture = TestBed.createComponent(SearchBookComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
