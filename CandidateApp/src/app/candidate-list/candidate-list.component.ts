import { Component, OnInit } from '@angular/core';
import { CandidateService } from '../services/candidate.service';
import { Candidate } from '../candidate.interface';
import { Router } from '@angular/router';

@Component({
  selector: 'app-candidate-list',
  templateUrl: './candidate-list.component.html',
  styleUrls: ['./candidate-list.component.css']
})
export class CandidateListComponent implements OnInit{
  displayText: boolean = false;
  candidatesData: any =[];
  filteredCandidates: Candidate[] = [];

  constructor(public CandidateService:CandidateService,
    private router:Router
  ){

  }


  edit(Id: number) {
    this.router.navigate(['/edit', + Id])
  }

  delete(Id: number) {
    alert('Do You Want to delete Candidate?');
    this.CandidateService.deleteCandidate(Id)

  }

  ngOnInit(): void {
      this.CandidateService.getAllCandidates().subscribe((data: any) =>{
        this.candidatesData = data;
        this.filteredCandidates = data;
      });
  }
}
