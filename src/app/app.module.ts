import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { Routes, RouterModule } from '@angular/router';


import { AppComponent } from './app.component';
import { BlackWhiteColorDirective } from './black-white-color.directive';
import { TestComponent } from './test/test.component';
import { RoutingComponent } from './routing/routing.component';
import { HomeComponent } from './home/home.component';
import { Test2Component } from './test2/test2.component';

@NgModule({
  declarations: [
    AppComponent,
    BlackWhiteColorDirective,
    TestComponent,
    RoutingComponent,
    HomeComponent,
    Test2Component
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot([
      {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
      },
      {
        path: 'home',
        component: HomeComponent
      },
      {
        path: 'routes',
        component: RoutingComponent,
        children: [
          {
            path: '',
            redirectTo: 'test',
            pathMatch: 'full'
          },
          {
            path: 'test',
            component: TestComponent
          },
          {
            path: 'test2',
            component: Test2Component
          }
        ]
      }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
