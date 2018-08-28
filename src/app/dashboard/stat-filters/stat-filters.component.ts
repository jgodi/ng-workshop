import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-stat-filters',
  templateUrl: './stat-filters.component.html',
  styleUrls: ['./stat-filters.component.scss'],
})
export class StatFiltersComponent implements OnInit {
  filters: FormGroup;

  constructor(fb: FormBuilder) {
    this.filters = fb.group({
      title: ['']
    });
  }
  logForm() {
    console.log(this.filters);
  }
  ngOnInit() {}
}
