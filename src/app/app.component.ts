import { Component } from '@angular/core';
import { KentekenCheck } from 'rdw-kenteken-check';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  vehicleType: string = 'auto';
  validLicense: boolean = true;
  licensePlate: string = '';

  onVehicleSelect(event: any) {
    this.vehicleType = event.target.value; 
  }

  validateLicensePlate(event: any) {
    if (event.target.value) {
      const kentekenCheck = new KentekenCheck(event.target.value);
      const formattedLicensePlate = kentekenCheck.formatLicense();

      if (formattedLicensePlate === 'XX-XX-XX') {
        this.validLicense = false;
      } else {
        this.validLicense = true;
        this.licensePlate = formattedLicensePlate;
      }
    }
  }
}
