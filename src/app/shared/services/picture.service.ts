import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Notyf } from 'notyf';
import { lastValueFrom } from 'rxjs';
import { environment } from '../../../environments/environment';
import { NOTYF } from '../../core/notyf.token';
import { Picture } from '../types/picture';

@Injectable({
	providedIn: 'root',
})
export class PictureService {
	private controller: string = 'picture';

	constructor(
		private http: HttpClient,
		@Inject(NOTYF) private notyf: Notyf,
	) {}

	public async upload(file: File): Promise<Picture | null> {
		try {
			const formData = new FormData();
			formData.append('file', file);

			const response: Picture = await lastValueFrom(
				this.http.post<Picture>(
					`${environment.apiUrl}/${this.controller}`,
					formData,
				),
			);

			this.notyf.success('Image uploaded successfully!');

			return response;
		} catch {
			return null;
		}
	}
}
