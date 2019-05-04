import {Component, OnInit} from '@angular/core';
import {JobOverview, JobsService, JobStatus} from '../../../services/jobs.service';
import {MatSnackBar} from '@angular/material';

@Component({
  selector: 'app-job-overview',
  templateUrl: './job-overview.component.html',
  styleUrls: ['./job-overview.component.scss']
})
export class JobOverviewComponent implements OnInit {

  public jobs: JobOverview[];
  public openRequest: JobOverview[];
  public jobOptions: JobOverview[];
  public comingJobs: JobOverview[];
  public pastJobs: JobOverview[];

  constructor(public jobsService: JobsService,
              private snackBar: MatSnackBar) {
    this.jobs = jobsService.jobsOverview();
    this.splitJobs();
  }

  ngOnInit() {
  }

  /**
   * denied job is removed out of the list
   * @param job
   */
  public rejectJob(job: JobOverview) {
    const index = this.jobs.indexOf(job);
    this.jobs.splice(this.jobs.indexOf(job), 1);
    this.snackBar.open('Job rejected', 'UNDO', {
      duration: 2000,
    }).onAction().subscribe(() => {
      this.jobs.splice(index, 0, job);
      this.splitJobs();
    });
    this.splitJobs();
  }

  /**
   * gives an option for the job
   * @param job
   */
  public acceptJob(job: JobOverview) {
    job.status = JobStatus.OPTION;
    this.snackBar.open('Job accepted', 'UNDO', {
      duration: 2000,
    }).onAction().subscribe(() => {
      job.status = JobStatus.REQUEST;
      this.splitJobs();
    });
    this.splitJobs();
  }

  private splitJobs(): void {
    this.openRequest = this.jobs.filter(value => value.status === JobStatus.REQUEST);
    this.jobOptions = this.jobs.filter(value => value.status === JobStatus.OPTION);
    this.comingJobs = this.jobs.filter(value => value.status === JobStatus.COMING);
    this.pastJobs = this.jobs.filter(value => value.status === JobStatus.PAST);
  }

}
