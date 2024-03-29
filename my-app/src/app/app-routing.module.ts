
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { GridComponent } from './components/grid/grid.component';
import { HeroComponent } from './components/hero/hero.component';
import { LoginComponent } from './components/login/login.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { TaskComponent } from './components/task/task.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'hero', component: HeroComponent },
  { path: 'grid', component: GridComponent },
  { path: 'task', component: TaskComponent},
  { path: 'dashboard', component: DashboardComponent },

  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
