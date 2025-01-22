import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CandidateListComponent } from './candidate-list/candidate-list.component';
import { AddCandidateComponent } from './add-candidate/add-candidate.component';
import { EditComponent } from './edit/edit.component';
import { SearchComponent } from './search/search.component';
import { FilterComponent } from './filter/filter.component';

const routes: Routes = [
  { path: '', component: CandidateListComponent },
  { path: 'add', component: AddCandidateComponent },
  { path: 'edit/:id' , component: EditComponent },
  { path:'overview', component: CandidateListComponent },
  { path:'search', component: SearchComponent },
  { path:'filter', component: FilterComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
 }
