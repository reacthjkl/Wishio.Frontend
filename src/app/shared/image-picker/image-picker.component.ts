import { Component, Input } from '@angular/core';
import {
	FontAwesomeModule,
	IconDefinition,
} from '@fortawesome/angular-fontawesome';
import { faCamera } from '@fortawesome/free-solid-svg-icons';

@Component({
	selector: 'app-image-picker',
	imports: [FontAwesomeModule],
	templateUrl: './image-picker.component.html',
	styleUrl: './image-picker.component.scss',
})
export class ImagePickerComponent {
	@Input() image?: string;
	@Input() placeholder: string = 'balloons.png';
	@Input() hint: string = 'Choose a picture';
	@Input() icon: IconDefinition = faCamera;
}
