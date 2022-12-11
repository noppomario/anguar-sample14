import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminTopComponent } from './pages/page-admin/admin-top/admin-top.component';
import { GlobalConfigComponent } from './pages/page-admin/global-config/global-config.component';
import { PageAdminComponent } from './pages/page-admin/page-admin.component';
import { UserComponent } from './pages/page-admin/user/user.component';
import { PageUserComponent } from './pages/page-user/page-user.component';
import { UserTopComponent } from './pages/page-user/user-top/user-top.component';

const routes: Routes = [
  {
    path: '',
    component: PageUserComponent,
    children: [{ path: '', component: UserTopComponent }],
  },
  {
    path: 'admin',
    component: PageAdminComponent,
    children: [
      { path: '', component: AdminTopComponent },
      { path: 'global-config', component: GlobalConfigComponent },
      { path: 'user', component: UserComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
