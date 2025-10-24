import { Component } from '@angular/core';
import {
	FormControl,
	FormGroup,
	FormsModule,
	ReactiveFormsModule,
} from '@angular/forms';
import { NgbDatepickerModule } from '@ng-bootstrap/ng-bootstrap';
import autosize from 'autosize';
import { ImagePickerComponent } from '../../shared/image-picker/image-picker.component';

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
		name: new FormControl(''),
		description: new FormControl(''),
		date: new FormControl(''),
	});

	ngAfterViewInit() {
		autosize(document.querySelectorAll('textarea'));
	}

	public async save(): Promise<void> {
		console.log(this.form.value);
	}
}
