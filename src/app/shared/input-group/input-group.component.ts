import { Component, Input } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';

@Component({
	selector: 'app-input-group',
	imports: [ReactiveFormsModule],
	templateUrl: './input-group.component.html',
	styleUrl: './input-group.component.scss',
})
export class InputGroupComponent {
	@Input() id: string = crypto.randomUUID();
	@Input({ required: true }) label!: string;
	@Input({ required: true }) placeholder!: string;

	@Input({ required: true }) control!: FormControl;
}
