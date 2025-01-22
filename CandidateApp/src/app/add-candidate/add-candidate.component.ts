import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CandidateService } from '../services/candidate.service';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-add-candidate',
  templateUrl: './add-candidate.component.html',
  styleUrls: ['./add-candidate.component.css']
})
export class AddCandidateComponent implements OnInit {

  ngOnInit(): void {
  }
  constructor(private CandidateService: CandidateService, private router: Router) { }
  CandidateForm = new FormGroup({
    id: new FormControl(''),
    name: new FormControl(''),
    skills: new FormControl(''),
    experience: new FormControl(''),
    designation: new FormControl('')
  });


  onSubmit() {
    this.CandidateService.addCandidate(this.CandidateForm.value);
    this.router.navigate(['/overview'])
  }

}
