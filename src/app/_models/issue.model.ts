export interface Issue {
  id: number;
  title: string;
  description: string;
  category: string;
  severity: number;
  resolved: boolean;
  raisedBy: string;
  createdOn: Date;
  resolvedOn: Date;
  remarks: string;
  escalated: boolean;
}
