import { Component, Input, ViewChild } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';

// @ts-ignore
import autosize from 'autosize';

@Component({
	selector: 'app-expandable-textarea',
	imports: [ReactiveFormsModule],
	templateUrl: './expandable-textarea.component.html',
	styleUrl: './expandable-textarea.component.scss',
})
export class ExpandableTextareaComponent {
	@Input() id: string = crypto.randomUUID();
	@Input({ required: true }) label!: string;
	@Input({ required: true }) placeholder!: string;

	@Input({ required: true }) control!: FormControl;

	@ViewChild('textarea') textarea!: HTMLTextAreaElement;

	ngAfterViewInit() {
		autosize(document.querySelectorAll('textarea'));
	}
}
