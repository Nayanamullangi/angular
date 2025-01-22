import { Component } from '@angular/core';
import { CandidateService } from '../services/candidate.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  constructor(private CandidateService: CandidateService) { }
  getDesignation(event: any) {
    this.CandidateService.searchedCandidate.next(true);
    this.CandidateService.CandidateDataLoad.next(this.CandidateService.CandidateData.filter(obj => obj.designation === event.target.value));
  }

}
