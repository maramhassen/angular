import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-apartments',
  templateUrl: './apartments.component.html',
  styleUrls: ['./apartments.component.css']
})
export class ApartmentsComponent implements OnInit {
  listApartments = [
    { apartNum: 101, floorNum: 1, surface: 75, terrace: true, category: 'T2', ResidenceId: 1 },
    { apartNum: 202, floorNum: 2, surface: 90, terrace: false, category: 'T3', ResidenceId: 1 },
    { apartNum: 303, floorNum: 3, surface: 65, terrace: true, category: 'Studio', ResidenceId: 2 },
    { apartNum: 404, floorNum: 4, surface: 80, terrace: false, category: 'T2', ResidenceId: 3 }
  ];

  constructor() {}

  ngOnInit(): void {}
}
