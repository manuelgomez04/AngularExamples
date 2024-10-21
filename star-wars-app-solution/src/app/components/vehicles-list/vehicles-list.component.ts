import { Component, OnInit } from '@angular/core';
import { vehicles } from '../../models/vehicles-list.interfaces'; // Adjust the path as necessary
import { VehicleService } from '../../services/vehicle.service';

@Component({
  selector: 'app-vehicles-list',
  templateUrl: './vehicles-list.component.html',
  styleUrl: './vehicles-list.component.css'
})
export class VehiclesListComponent implements OnInit {

  vehicles: vehicles[] = [];
  constructor(private vehicleService: VehicleService) { }

  ngOnInit(): void {
    this.vehicleService.getVehicleList().subscribe((response) => {
      this.vehicles = response.results;
    });
  }
}
