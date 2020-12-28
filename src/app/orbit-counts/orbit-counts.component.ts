import { Component, OnInit, Input } from '@angular/core';
import { Satellite } from '../satellite';

@Component({
  selector: 'app-orbit-counts',
  templateUrl: './orbit-counts.component.html',
  styleUrls: ['./orbit-counts.component.css']
})
export class OrbitCountsComponent implements OnInit {
  @Input() satellites: Satellite[];
  constructor() { }

  ngOnInit() {
  }

  getTotal() {
    return this.satellites.length;
  }
  getTypeTotal(type: string) {
    let count = 0;
    for (let i=0; i < this.satellites.length; i++) {
      if (type === this.satellites[i].type) {
        count++;
      }
    }
    return count;
  }
}
