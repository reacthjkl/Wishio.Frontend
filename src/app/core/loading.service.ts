import { Injectable, signal, WritableSignal } from '@angular/core';

@Injectable({
	providedIn: 'root',
})
export class LoadingService {
	public isLoading: WritableSignal<boolean> = signal<boolean>(false);
	public loadingMessage: WritableSignal<string | null> = signal<string | null>(
		null,
	);

	constructor() {}

	public reset() {
		this.isLoading.set(false);
		this.loadingMessage.set(null);
	}
}
