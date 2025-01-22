import { Injectable } from '@angular/core';
import { Candidate } from '../candidate.interface';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CandidateService {
  CandidateDataLoad = new BehaviorSubject<Candidate[]>([]);
  searchedCandidate = new BehaviorSubject<any>(false);
  CandidateData:Candidate[] = [
    { id: 1, name: 'Nayana M', skill: 'Angular', experience: '5years',designation:'Software Developer' },
    { id: 2, name: 'Jane Smith', skill: 'React', experience: '10years',designation:'Technical Lead' },
    { id: 3, name: 'John Doe', skill: 'Java', experience: '7years',designation:'Software Developer' },
    { id: 4, name: 'Karthika M', skill: 'NodeJs', experience: '8years',designation:'Technical Lead' },
    { id: 5, name: 'Doe L', skill: 'Testing', experience: '3years',designation:'Quality Assurance' },
    { id: 6, name: 'John H', skill: 'Management', experience: '15years',designation:'Manager' },
    { id: 6, name: 'James K', skill: 'Azure', experience: '15years',designation:'Senior Software Developer' },
    
  ];

  constructor() { 
    this.CandidateDataLoad.next(this.CandidateData);
  }

  getAllCandidates(): Observable<Candidate[]> {
    return this.CandidateDataLoad.asObservable();
  }

  addCandidate(data: any) {
    data['id'] = this.CandidateData.length + 1;
    this.CandidateData.push(data);
    this.CandidateDataLoad.next(this.CandidateData);
  }

  editCandidate(CandidateForm: any) {
    const index = this.CandidateData.findIndex((p:any) =>p.id === CandidateForm.id);
    this.CandidateData[index] = CandidateForm;
    this.CandidateDataLoad.next(this.CandidateData);
  }

  deleteCandidate(Id:number){
    let filteredData = this.CandidateData.filter((p:any) => p.id !== Id)
    this.CandidateDataLoad.next(filteredData);
  }

  searchCandidates(query: string): void {
    const filteredData = this.CandidateData.filter(candidate =>
      candidate.name.toLowerCase().includes(query.toLowerCase()) ||
      candidate.skill.toLowerCase().includes(query.toLowerCase())
    );
    this.CandidateDataLoad.next(filteredData);
  }
}
