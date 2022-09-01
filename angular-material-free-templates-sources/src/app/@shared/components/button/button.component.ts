import {Component, EventEmitter, Input, Output} from '@angular/core'
import {UntypedFormGroup} from "@angular/forms";

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css'],
})
export class ButtonComponent {

  @Input('classCss') classCss: string | undefined;
  @Input('libelleButton') libelleButton: string | undefined;
  @Input('btnDisabled') btnDisabled: boolean | undefined;
  @Input('formGroup')   formGroup: UntypedFormGroup  | undefined;
  @Output('submitForm') submitForm: EventEmitter<void> = new EventEmitter<void>();


  click(): void {
    this.submitForm.emit();
  }
}
