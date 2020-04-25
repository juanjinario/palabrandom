import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  { path: 'home', loadChildren: () => import('./pages/home/home.module').then(m => m.HomeModule) },
  { path: 'upload', loadChildren: () => import('./pages/upload/upload.module').then(m => m.UploadModule) },
  { path: 'list', loadChildren: () => import('./pages/list/list.module').then(m => m.ListModule) },
  { path: '', pathMatch: 'full', redirectTo: 'list' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
