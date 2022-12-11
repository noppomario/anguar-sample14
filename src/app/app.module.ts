import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { NZ_I18N, ja_JP } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import ja from '@angular/common/locales/ja';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { IconsProviderModule } from './icons-provider.module';
import { PageUserComponent } from './pages/page-user/page-user.component';
import { PageAdminComponent } from './pages/page-admin/page-admin.component';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { CommonLayoutComponent } from './pages/shared/common-layout/common-layout.component';
import { GlobalConfigComponent } from './pages/page-admin/global-config/global-config.component';
import { UserComponent } from './pages/page-admin/user/user.component';
import { AdminTopComponent } from './pages/page-admin/admin-top/admin-top.component';
import { UserTopComponent } from './pages/page-user/user-top/user-top.component';

registerLocaleData(ja);

@NgModule({
  declarations: [
    AppComponent,
    PageAdminComponent,
    PageUserComponent,
    CommonLayoutComponent,
    GlobalConfigComponent,
    UserComponent,
    AdminTopComponent,
    UserTopComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    IconsProviderModule,
    NzLayoutModule,
    NzMenuModule,
  ],
  providers: [{ provide: NZ_I18N, useValue: ja_JP }],
  bootstrap: [AppComponent],
})
export class AppModule {}
