import { Component, OnInit } from '@angular/core';
import { Residence } from 'src/app/core/models/Residence'; 

@Component({
  selector: 'app-residence-list',
  templateUrl: './residence-list.component.html',
  styleUrls: ['./residence-list.component.css']
})
export class ResidenceListComponent implements OnInit {
  date: Date = new Date(); 
  searchText: string = ''; 

  listResidences: Residence[] = [
    { id: 1, name: "El fel", address: "Borj Cedria", image: "assets/imgs/a1.jpeg", status: "Disponible" },
    { id: 2, name: "El yasmine", address: "Ezzahra", image: "assets/imgs/a2.jpeg", status: "Disponible" },
    { id: 3, name: "El Arij", address: "Rades", image: "assets/imgs/a3.jpeg", status: "Vendu" },
    { id: 4, name: "El Anber", address: "inconnu", image: "assets/imgs/a4.jpeg", status: "En Construction" }
  ];

  favoriteResidences: Residence[] = [];

  constructor() {}

  ngOnInit(): void {}

  filterByAddress(): Residence[] {
    if (!this.searchText.trim()) {
      return this.listResidences;
    }
    return this.listResidences.filter(res =>
      res.address.toLowerCase().includes(this.searchText.toLowerCase())
    );
  }

  getStatusColor(status: string): string {
    switch (status) {
      case "Disponible": return "green";
      case "Vendu": return "red";
      case "En Construction": return "orange";
      default: return "black";
    }
  }

  showLocation(address: string) {
    if (!address || address.toLowerCase() === "inconnu") {
      alert("⚠️ L’adresse de cette résidence est inconnue.");
    } else {
      alert(`📍 Adresse de la résidence : ${address}`);
    }
  }
  

  addToFavorite(res: Residence) {
    if (!this.favoriteResidences.includes(res)) {
      this.favoriteResidences.push(res);
    }
  }

  removeFromFavorites(residence: Residence) {
    this.favoriteResidences = this.favoriteResidences.filter(r => r.id !== residence.id);
  }
  getStatusIcon(status: string): string {
  switch (status) {
    case "Disponible": return "✅";
    case "En Construction": return "🚧";
    case "Vendu": return "❌";
    default: return "❓";
  }
}

}
