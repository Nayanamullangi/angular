import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { CandidateService } from '../services/candidate.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  currentCandidateData: any;

  constructor(private activatedRoute: ActivatedRoute,private CandidateService: CandidateService, private router: Router) { }
    CandidateForm = new FormGroup({
      id: new FormControl(''),
      name: new FormControl(''),
      skill: new FormControl(''),
      experience: new FormControl(''),
      designation: new FormControl('')
    });

  ngOnInit(): void {
    let candidateId = this.activatedRoute.snapshot.params['id'];
    if (candidateId) {
      this.currentCandidateData = this.CandidateService.CandidateData.filter((obj: any) => obj.id === +(candidateId));
      this.CandidateForm.patchValue({
        id: this.currentCandidateData[0]?.id,
        name: this.currentCandidateData[0]?.name,
        skill: this.currentCandidateData[0]?.skill,
        experience:this.currentCandidateData[0]?.experience,
        designation: this.currentCandidateData[0]?.designation,
      })
    }
  }

  onSubmit() {
    this.CandidateService.editCandidate(this.CandidateForm.value);
    this.router.navigate(['/overview'])
  }
}
