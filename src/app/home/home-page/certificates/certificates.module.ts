import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CertificatesComponent } from './certificates.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';

export function HttpLoaderFactory(http: HttpClient){
  return new TranslateHttpLoader(http,'../assets/i18n/','.json');
}

@NgModule({
  declarations: [
    CertificatesComponent
  ],
  imports: [
    CommonModule,HttpClientModule,TranslateModule.forRoot({
      defaultLanguage: 'en-US',
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps : [HttpClient]
      }
    })
  ],
  exports: [CertificatesComponent]
})
export class CertificatesModule { }
