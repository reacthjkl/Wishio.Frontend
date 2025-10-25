import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Notyf } from 'notyf';
import { lastValueFrom } from 'rxjs';
import { environment } from '../../../environments/environment';
import { NOTYF } from '../../core/notyf.token';
import { Response } from '../types/response';
import { Wishlist } from '../types/wishlist';

@Injectable({
	providedIn: 'root',
})
export class WishlistService {
	private controller: string = 'wishlist';

	constructor(
		private http: HttpClient,
		@Inject(NOTYF) private notyf: Notyf,
	) {}

	public async create(wishlist: Wishlist): Promise<boolean> {
		try {
			const response: Response<Wishlist> = await lastValueFrom(
				this.http.post<Response<Wishlist>>(
					`${environment.apiUrl}/${this.controller}`,
					wishlist,
				),
			);

			if (response.successful)
				this.notyf.success('You just created a wishlist!');

			return response.successful;
		} catch (e) {
			return false;
		}
	}
}
