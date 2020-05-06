import { Component, OnInit } from '@angular/core';
import { ValueService } from '../Services/value.service';

@Component({
  selector: 'app-value',
  templateUrl: './value.component.html',
  styleUrls: ['./value.component.scss']
})

export class ValueComponent implements OnInit {

  values: any;
  constructor(private valueService: ValueService) { }

  ngOnInit(): void {
    this.valueService.getAll().subscribe(response => {
      this.values = response;
    }, error => {
      console.log(error);
    });
  }

}
