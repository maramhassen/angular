import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-residences',
  templateUrl: './residences.component.html',
  styleUrls: ['./residences.component.css']
})
export class ResidencesComponent implements OnInit {
  date: Date = new Date(); 
  searchText: string = ''; 
  listResidences = [
    { id: 1, name: "El Fel", address: "Borj Cedria", image: "assets/imgs/a1.jpeg", status: "Disponible" },
    { id: 2, name: "El Yasmine", address: "Ezzahra", image: "assets/imgs/a2.jpeg", status: "Vendu" },
    { id: 3, name: "El Arij", address: "Rades", image: "assets/imgs/a3.jpeg", status: "En Construction" },
    { id: 4, name: "El Anber", address: "Tunis", image: "assets/imgs/a4.jpeg", status: "Disponible" }
  ];
  
  filteredResidences: any[] = []; 
  favoriteResidences: any[] = []; 

  constructor() {}

  ngOnInit(): void {
    this.updateFilteredResidences(); 
  }

  updateFilteredResidences(): void {
    this.filteredResidences = this.listResidences.filter(res =>
      res.address.toLowerCase().includes(this.searchText.toLowerCase())
    );
  }

  addToFavorite(res: any) {
    if (!this.favoriteResidences.includes(res)) {
      this.favoriteResidences.push(res);
    }
  }

  removeFromFavorites(res: any) {
    this.favoriteResidences = this.favoriteResidences.filter(r => r.id !== res.id);
  }

  getStatusColor(status: string): string {
    switch (status) {
      case "Disponible": return "green";
      case "Vendu": return "red";
      case "En Construction": return "orange";
      default: return "black";
    }
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
