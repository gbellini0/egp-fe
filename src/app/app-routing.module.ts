import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdvancedNotesComponent } from './advanced-notes/advanced-notes.component';

const routes: Routes = [{ path: '**', component: AdvancedNotesComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
