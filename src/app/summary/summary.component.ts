import { Component, OnInit } from '@angular/core';
import { DataService } from '../_services/data.service';
import { Observable } from 'rxjs';
import { Issue } from '../_models/issue.model';
import { Summary } from '../_models/summary.model';
import { tap, finalize } from 'rxjs/operators';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.css']
})
export class SummaryComponent implements OnInit {
  summary$: Observable<Summary>;

  constructor(private dataService: DataService) {
    this.summary$ = this.dataService.summary$;
  }

  ngOnInit() {}
}
