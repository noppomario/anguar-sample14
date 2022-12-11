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

registerLocaleData(ja);

@NgModule({
  declarations: [
    AppComponent,
    PageAdminComponent,
    PageUserComponent,
    CommonLayoutComponent,
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
