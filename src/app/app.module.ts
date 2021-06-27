import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from "@angular/common/http";
import {ApolloModule, Apollo} from "apollo-angular";
import {ApolloClientOptions} from "apollo-client";
import {HttpLinkModule, HttpLink} from "apollo-angular-link-http";
import { AppComponent } from './app.component';
import {InMemoryCache} from "apollo-cache-inmemory";
import { ListComponent } from './list/list.component';

@NgModule({
  declarations: [
    AppComponent,
    ListComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ApolloModule,
    HttpLinkModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(apollo: Apollo, httpLink: HttpLink) {
    apollo.create({
      link: httpLink.create({uri: 'http://localhost:4000/graphql'}),
      cache: new InMemoryCache(),
    })

  }
}
