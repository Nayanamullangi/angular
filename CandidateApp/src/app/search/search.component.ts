import { Component, OnInit } from '@angular/core';
import { Candidate } from '../candidate.interface';
import { CandidateService } from '../services/candidate.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  candidates: Candidate[] = [];
  searchQuery: string = '';

  constructor(private candidateService: CandidateService) {}

  ngOnInit(): void {
    // Subscribe to the candidate data to get updates
    this.candidateService.getAllCandidates().subscribe(data => {
      this.candidates = data;
    });
  }

  onSearch(): void {
    // Trigger search based on the input query
    this.candidateService.searchCandidates(this.searchQuery);
  }

  // Optionally, reset the search to show all candidates
  resetSearch(): void {
    this.searchQuery = '';
    this.candidateService.searchCandidates(this.searchQuery);
  }
}
