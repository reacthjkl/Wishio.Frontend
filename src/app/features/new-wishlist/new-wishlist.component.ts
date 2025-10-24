import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { ImagePickerComponent } from '../../shared/image-picker/image-picker.component';
import { InputGroupComponent } from '../../shared/input-group/input-group.component';
import { ExpandableTextareaComponent } from "../../shared/expandable-textarea/expandable-textarea.component";

@Component({
	selector: 'app-new-wishlist',
	imports: [ReactiveFormsModule, InputGroupComponent, ImagePickerComponent, ExpandableTextareaComponent],
	templateUrl: './new-wishlist.component.html',
	styleUrl: './new-wishlist.component.scss',
})
export class NewWishlistComponent {
	public form: FormGroup = new FormGroup({
		name: new FormControl(''),
	});

	get nameControl(): FormControl {
		return this.form.get('name') as FormControl;
	}

	public async save(): Promise<void> {
		console.log(this.form.value);
	}
}
