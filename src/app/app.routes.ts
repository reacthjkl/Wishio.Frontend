import { Routes } from '@angular/router';
import { IntroComponent } from './features/intro/intro.component';

export const routes: Routes = [
	{ path: '', component: IntroComponent },
	{ path: '*', redirectTo: '', pathMatch: 'full' },
];
