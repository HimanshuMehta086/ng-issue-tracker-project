import { Component, OnInit, Input } from '@angular/core';
import { Issue } from '../_models/issue.model';
import { DataService } from '../_services/data.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  issues$: Observable<Issue[]>;

  constructor(private dataService: DataService) {
    this.issues$ = this.dataService.issues$;
  }

  ngOnInit() {}
}
