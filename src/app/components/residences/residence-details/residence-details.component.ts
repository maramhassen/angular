import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Residence } from 'src/app/core/models/Residence';

@Component({
  selector: 'app-residence-details',
  templateUrl: './residence-details.component.html',
  styleUrls: ['./residence-details.component.css']
})
export class ResidenceDetailsComponent implements OnInit {
  residence!: Residence | undefined;

  residences: Residence[] = [
    { id: 1, name: "El Fel", address: "Borj Cedria", image: "assets/imgs/a1.jpeg", status: "Disponible" },
    { id: 2, name: "El Yasmine", address: "Ezzahra", image: "assets/imgs/a2.jpeg", status: "Vendu" },
    { id: 3, name: "El Arij", address: "Rades", image: "assets/imgs/a3.jpeg", status: "En Construction" }
  ];
  
  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    this.loadResidence();
  }

  loadResidence(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.residence = this.residences.find(r => r.id === id);

    if (!this.residence) {
      alert("⚠️ Résidence non trouvée !");
      this.router.navigate(['/residences']); 
    }
  }

  previousResidence(): void {
    if (!this.residence) return;

    const prevId = this.residence.id - 1;
    if (this.residences.some(r => r.id === prevId)) {
      this.router.navigate(['/residences', prevId]);
    } else {
      alert("🚫 C'est la première résidence !");
    }
  }

  nextResidence(): void {
    if (!this.residence) return;
    
    const nextId = this.residence.id + 1;
    if (this.residences.some(r => r.id === nextId)) {
      this.router.navigate(['/residences', nextId]);
    } else {
      alert("🚫 C'est la dernière résidence !");
    }
  }

  getStatusColor(status: string): string {
    switch (status) {
      case "Disponible": return "green";
      case "Vendu": return "red";
      case "En Construction": return "orange";
      default: return "black";
    }
  }

  getImage(): string {
    return this.residence?.image || "assets/imgs/default.jpg";
  }
}
