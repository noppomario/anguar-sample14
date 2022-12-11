import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PageAdminComponent } from './pages/page-admin/page-admin.component';
import { PageUserComponent } from './pages/page-user/page-user.component';

@NgModule({
  declarations: [AppComponent, PageAdminComponent, PageUserComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
