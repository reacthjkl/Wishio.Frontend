import { Component } from '@angular/core';
import {
	FormControl,
	FormGroup,
	FormsModule,
	ReactiveFormsModule,
	Validators,
} from '@angular/forms';
import autosize from 'autosize';
import { ImagePickerComponent } from '../../shared/components/image-picker/image-picker.component';
import { WishlistService } from '../../shared/services/wishlist.service';

@Component({
	selector: 'app-new-wishlist',
	imports: [ReactiveFormsModule, ImagePickerComponent, FormsModule],
	templateUrl: './new-wishlist.component.html',
	styleUrl: './new-wishlist.component.scss',
})
export class NewWishlistComponent {
	public form: FormGroup = new FormGroup({
		name: new FormControl('', [Validators.required, Validators.maxLength(255)]),
		description: new FormControl('', [Validators.maxLength(2000)]),
		pictureId: new FormControl(''),
	});

	public showSumbit: boolean = false;

	constructor(private wishlistSvc: WishlistService) {}

	ngAfterViewInit() {
		autosize(document.querySelectorAll('textarea'));
	}

	public async save(): Promise<void> {
		if (!this.form.valid) return;

		const success: boolean = await this.wishlistSvc.create(this.form.value);
	}
}
