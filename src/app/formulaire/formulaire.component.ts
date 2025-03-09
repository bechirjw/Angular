import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { Router } from '@angular/router';
import { ServiceService } from '../service.service';
@Component({
  selector: 'app-formulaire',
  templateUrl: './formulaire.component.html',
  styleUrls: ['./formulaire.component.css']
})
export class FormulaireComponent {

  ResidenceForm!: FormGroup;
  statusOptions: string[] = ["Disponible", "En construction", "Vendu"];
  constructor(private rs: ServiceService ,private router: Router) {}

  ngOnInit() {
    this.ResidenceForm = new FormGroup({
      id: new FormControl('', [Validators.required, Validators.min(1)]),
      name: new FormControl('', [Validators.required, Validators.minLength(4)]),
      address: new FormControl('', [Validators.required, Validators.minLength(4)]),
      status: new FormControl('', [Validators.required, Validators.pattern('Disponible|En construction|Vendu')]),
      //date: new FormControl('', [Validators.required, Validators.pattern('^\\d{4}-\\d{2}-\\d{2}$')]),
      image: new FormControl('',Validators.required)
    });
  }
  onSubmit() {
    if (this.ResidenceForm.valid) {      
      this.rs.addResidence(this.ResidenceForm.value).subscribe({
        next: () => {
          console.log('Résidence ajoutée avec succès !');
          this.router.navigate(['/residence']); 
        },
      });
    }
  }
  

}
