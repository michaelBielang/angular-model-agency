import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {ClientJobsService} from '../../../../services/client/client-jobs.service';
import {ClientJob} from '../../../../enums/client-job-interface';
import {JobStatus} from '../../../../enums/job-status.type';
import {NavigatedFromRouteService} from '../../../../services/navigated-from-route.service';
import {ModelService} from '../../../../services/model.service';

@Component({
  selector: 'app-job-details-infos',
  templateUrl: './client-job-details-infos.component.html',
  styleUrls: ['./client-job-details-infos.component.scss']
})
export class ClientJobDetailsInfosComponent implements OnInit {

  public job: ClientJob;

  public JobStatus = JobStatus;

  constructor(private route: ActivatedRoute,
              private jobsService: ClientJobsService,
              private navigatedFromRouteService: NavigatedFromRouteService,
              private modelService: ModelService) {
    this.navigatedFromRouteService.resetCurrentUrlToPrevious();
    const id = this.route.parent.snapshot.paramMap.get('jobId');
    this.job = this.jobsService.job(id);
  }

  ngOnInit() {
  }

  public acceptModel(modelId: string) {
    this.jobsService.changeModelStatus(this.job.jobId, modelId, JobStatus.COMING);
  }

}