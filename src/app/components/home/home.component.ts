import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { SelectItem } from 'primeng/components/common/api';
import { CountryService } from '../../core/country.service';
import { TrackerError } from '../../core/TrackerError';
import { ICountry } from '../../core/country';

@Component({
  selector: 'b-home',
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {
  selectedCar: string;
  constructor(private title: Title, private countryService: CountryService) {
    this.title.setTitle('Home');
  }
  ngOnInit() {
  }

}
