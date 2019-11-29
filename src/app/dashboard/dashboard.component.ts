import { Component, OnInit, Input } from '@angular/core';
import { Issue } from '../_models/issue.model';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  @Input() issues: Issue[];

  constructor() {}

  ngOnInit() {}
}
