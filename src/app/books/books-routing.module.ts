import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoriesComponent } from './components/categories/categories.component';
import { SearchBookComponent } from './components/seach-book/seach-book.component';

const routes: Routes = [{
	path: '',
	component: CategoriesComponent
}, {
	path: 'seachBook',
	component: SearchBookComponent
}];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})
export class BooksRoutingModule { }
