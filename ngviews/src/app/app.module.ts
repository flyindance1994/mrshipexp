import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {RouterModule, Routes} from '@angular/router';

import {AppComponent} from './app.component';
import {MyselfComponent} from './myself/myself.component';
import {HeaderComponent} from './header/header.component';
import {FooterComponent} from './footer/footer.component';
import {CodeComponent} from './code/code.component';
import {LocationStrategy, HashLocationStrategy} from "@angular/common";

const appRoutes: Routes = [
  {path: 'code', component: CodeComponent},
];

@NgModule({
  declarations: [
    AppComponent,
    MyselfComponent,
    HeaderComponent,
    FooterComponent,
    CodeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(
      appRoutes,
      {
        enableTracing: true
      }
    )
  ],
  providers: [{
    provide: LocationStrategy,
    useClass: HashLocationStrategy
  }],
  bootstrap: [AppComponent],
  exports: []
})
export class AppModule {
}
