import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

interface Apartment {
  apartNum: number;
  floorNum: number;
  surface: number;
  terrace: boolean;
  surfaceTerrace?: number;
  category: string;
  ResidenceId: number;
}

@Component({
  selector: 'app-add-apartment',
  templateUrl: './add-apartment.component.html',
  styleUrls: ['./add-apartment.component.css']
})
export class AddApartmentComponent {
  apartForm: FormGroup;
  newApart: Apartment | null = null;

  constructor(private fb: FormBuilder) {
    this.apartForm = this.fb.group({
      apartNum: ['', [Validators.required, Validators.pattern('^[0-9]+$')]],
      floorNum: ['', [Validators.required, Validators.pattern('^[0-9]+$')]],
      surface: ['', [Validators.required, Validators.min(20)]],
      terrace: [false, Validators.required],
      surfaceTerrace: [''],
      category: ['', Validators.required],
      ResidenceId: ['', Validators.required]
    });

    this.apartForm.get('surfaceTerrace')?.disable();
  }

  onTerraceChange(value: boolean) {
    if (value) {
      this.apartForm.get('surfaceTerrace')?.setValidators([Validators.required, Validators.min(1)]);
      this.apartForm.get('surfaceTerrace')?.enable();
    } else {
      this.apartForm.get('surfaceTerrace')?.clearValidators();
      this.apartForm.get('surfaceTerrace')?.disable();
      this.apartForm.get('surfaceTerrace')?.setValue(null);
    }
    this.apartForm.get('surfaceTerrace')?.updateValueAndValidity();
  }

  onSubmit() {
    if (this.apartForm.valid) {
      this.newApart = this.apartForm.value;
      console.log('Nouvel appartement ajouté :', this.newApart);
      alert('Appartement ajouté avec succès !');
    }
  }

  resetForm() {
    this.apartForm.reset();
    this.apartForm.get('surfaceTerrace')?.disable();
  }
}
