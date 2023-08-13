import { AbstractControl, FormControl, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  formControlColor = new FormControl('blue', [Validators.required, Validators.minLength(3), this.validColor()]);

  form = new FormGroup({
    name: new FormControl('Pepe', [Validators.required]),
    surname: new FormControl('Pompin', [Validators.minLength(3)]),
    age: new FormControl('19'),
    address: new FormGroup({
      street: new FormControl(),
      floor: new FormControl()
    })
  });

  constructor() { }

  ngOnInit(): void {
  }

  validColor(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      if (control.value == 'yellow') {
        return null; // OK
      }
  
      return {
        colorError: 'El color no es válido' // Error
      }
    }
  }

  handleSubmit() {
    console.log(this.form.value);
  }
}
