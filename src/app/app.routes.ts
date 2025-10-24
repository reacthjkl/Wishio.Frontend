import { Routes } from '@angular/router';
import { IntroComponent } from './features/intro/intro.component';
import { NewWishlistComponent } from './features/new-wishlist/new-wishlist.component';

export const routes: Routes = [
	{ path: '', component: IntroComponent },
	{ path: 'new-wishlist', component: NewWishlistComponent },
	{ path: '*', redirectTo: '', pathMatch: 'full' },
];
