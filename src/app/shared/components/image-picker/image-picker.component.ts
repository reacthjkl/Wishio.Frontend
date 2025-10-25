import { Component, EventEmitter, Input, Output } from '@angular/core';
import {
	FontAwesomeModule,
	IconDefinition,
} from '@fortawesome/angular-fontawesome';
import { faCamera } from '@fortawesome/free-solid-svg-icons';
import { PictureService } from '../../services/picture.service';
import { Picture } from '../../types/picture';

@Component({
	selector: 'app-image-picker',
	imports: [FontAwesomeModule],
	templateUrl: './image-picker.component.html',
	styleUrl: './image-picker.component.scss',
})
export class ImagePickerComponent {
	@Input() image?: string;
	@Input() placeholder: string = 'balloons.png';
	@Input() hint: string = 'Set Cover Image';
	@Input() icon: IconDefinition = faCamera;

	@Output() uploaded: EventEmitter<string> = new EventEmitter();

	constructor(private pictureSvc: PictureService) {}

	public askForPicture() {
		const input = document.createElement('input');
		input.type = 'file';
		input.accept = 'image/*';

		input.onchange = async (e: Event) => this.onFileSelect(e);
		input.click();
	}

	private async onFileSelect(e: Event) {
		const file = (e.target as HTMLInputElement).files?.[0];
		if (!file) return;

		const result: Picture | null = await this.pictureSvc.upload(file);
		if (!result) return;

		this.image = this.convertPictureToBase64(result);
		this.uploaded.emit(result.id);
	}

	private convertPictureToBase64(picture: Picture) {
		return `data:${picture.contentType};base64,${picture.binaryData}`;
	}
}
