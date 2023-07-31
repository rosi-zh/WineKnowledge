import { Directive, Input, OnChanges, SimpleChanges } from '@angular/core';
import { AbstractControl, ValidationErrors, Validator, ValidatorFn } from '@angular/forms';
import { emailValidator } from './email-validator';

@Directive({
  selector: '[appEmail]'
})
export class EmailDirective implements Validator, OnChanges {
  @Input() appEmail: string | undefined;

  validator: ValidatorFn = () => null;

  constructor() { }

  validate(control: AbstractControl<any, any>): ValidationErrors | null {
    return this.validator(control);
  }

  ngOnChanges(changes: SimpleChanges): void {
    const emailChanges = changes['appEmail'];

    if (emailChanges) {
      this.validator = emailValidator();
    }
  }
}
