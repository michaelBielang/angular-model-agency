import {Component, OnInit} from '@angular/core';
import {JobsService} from '../../../services/jobs.service';

@Component({
  selector: 'app-job-overview',
  templateUrl: './job-overview.component.html',
  styleUrls: ['./job-overview.component.scss']
})
export class JobOverviewComponent implements OnInit {

  public jobs;

  constructor(public jobsService: JobsService) {
    this.jobs = jobsService.jobsOverview();
  }

  ngOnInit() {
  }

}
