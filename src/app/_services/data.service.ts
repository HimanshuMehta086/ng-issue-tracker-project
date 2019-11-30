import { Injectable } from '@angular/core';
import { Issue } from '../_models/issue.model';
import { of } from 'rxjs';
import { Summary } from '../_models/summary.model';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private issues: Issue[] = [
    {
      category: 'Production',
      createdOn: new Date(2019, 1, 10),
      title: 'Program halts after the user submits from US locale',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      escalated: false,
      id: 1,
      raisedBy: 'DEV01',
      remarks: 'Under consideration',
      resolved: false,
      resolvedOn: null,
      severity: 8
    },
    {
      category: 'Development',
      createdOn: new Date(2019, 7, 15),
      title: 'Dev environment email client returns runtime exception',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      escalated: false,
      id: 2,
      raisedBy: 'DEV02',
      remarks: 'Under consideration',
      resolved: false,
      resolvedOn: null,
      severity: 8
    },
    {
      category: 'Testing',
      createdOn: new Date(2019, 5, 30),
      title: 'Module reload stub failed at test automation',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      escalated: false,
      id: 3,
      raisedBy: 'TEST05',
      remarks: 'Mocking isse is resolved after new stubs created',
      resolved: true,
      resolvedOn: new Date(2019, 6, 1),
      severity: 8
    }
  ];

  issues$ = of(this.issues);
  summary$ = of(this.summary);

  constructor() {}

  private get summary(): Summary {
    const summary: Summary = {
      nIssues: 0,
      nResolved: 0,
      nEscalated: 0
    };

    this.issues.forEach(el => {
      summary.nIssues++;

      if (el.resolved) {
        summary.nResolved++;
      }

      if (el.escalated) {
        summary.nEscalated++;
      }
    });

    return summary;
  }
}
