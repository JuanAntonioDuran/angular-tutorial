import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";

export function dateValidator(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      let valorCampo = control.value
      
      //TODO:
      let expirationDate = new Date(valorCampo)
      let today = new Date();
      if(expirationDate >=today){
        return null;
      }
      return {invalidDate: true}
    };
  }

  export function prioridadValidator(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      let value = control.value;
      if (!['L', 'M', 'H'].includes(value)) {
        return { invalidPriority: true };
      }
      return null;
    };
  }