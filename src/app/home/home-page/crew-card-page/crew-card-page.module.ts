import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CrewCardPageComponent } from './crew-card-page.component';
import { CertificatesModule } from '../certificates/certificates.module';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

export function HttpLoaderFactory(http: HttpClient){
  return new TranslateHttpLoader(http,'../assets/i18n/','.json');
}

@NgModule({
  declarations: [CrewCardPageComponent],
  imports: [
    CommonModule,CertificatesModule,HttpClientModule,TranslateModule.forRoot({
      defaultLanguage: 'en-US',
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps : [HttpClient]
      }
    })
  ],
  exports: [CrewCardPageComponent]
})
export class CrewCardPageModule { }
