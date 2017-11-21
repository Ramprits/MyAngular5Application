import { Component, OnInit } from '@angular/core';
import { CampService } from './camp.service';
import { ICamp } from './icamp';

@Component({
  selector: 'b-camp',
  templateUrl: './camp.component.html'
})
export class CampComponent implements OnInit {
  camps: ICamp[];
  constructor(private campService: CampService) { }

  ngOnInit() {
    this.GetCamps();
  }
  GetCamps() {
    this.campService.getCamps().subscribe(c => { this.camps = c; }, (err) => { console.log(err); });
  }
}
