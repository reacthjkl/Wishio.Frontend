import { Component } from '@angular/core';
import {
	FormControl,
	FormGroup,
	FormsModule,
	ReactiveFormsModule,
	Validators,
} from '@angular/forms';
import { NgbDatepickerModule } from '@ng-bootstrap/ng-bootstrap';
import autosize from 'autosize';
import { ImagePickerComponent } from '../../shared/components/image-picker/image-picker.component';
import { WishlistService } from '../../shared/services/wishlist.service';

@Component({
	selector: 'app-new-wishlist',
	imports: [
		ReactiveFormsModule,
		ImagePickerComponent,
		FormsModule,
		NgbDatepickerModule,
		FormsModule,
	],
	templateUrl: './new-wishlist.component.html',
	styleUrl: './new-wishlist.component.scss',
})
export class NewWishlistComponent {
	public form: FormGroup = new FormGroup({
		name: new FormControl('', [Validators.required, Validators.maxLength(255)]),
		description: new FormControl('', [Validators.maxLength(2000)]),
	});

	public showSumbit: boolean = false;

	constructor(private wishlistSvc: WishlistService) {}

	ngAfterViewInit() {
		autosize(document.querySelectorAll('textarea'));
	}

	public async save(): Promise<void> {
		console.log(this.form);
		if (!this.form.valid) return;

		const success: boolean = await this.wishlistSvc.create(this.form.value);
	}
}
