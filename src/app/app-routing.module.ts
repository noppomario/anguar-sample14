import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageAdminComponent } from './pages/page-admin/page-admin.component';
import { PageUserComponent } from './pages/page-user/page-user.component';

const routes: Routes = [
  { path: '', component: PageUserComponent },
  { path: 'admin', component: PageAdminComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
