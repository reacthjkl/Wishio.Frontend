import { Component, effect } from '@angular/core';
import { LoadingService } from '../../../core/loading.service';

@Component({
	selector: 'app-spinner',
	imports: [],
	templateUrl: './spinner.component.html',
	styleUrl: './spinner.component.scss',
})
export class SpinnerComponent {
	public loadingMessage: string | null = null;

	constructor(private loadingSvc: LoadingService) {
		effect(() => {
			this.loadingMessage = this.loadingSvc.loadingMessage();
		});
	}
}
