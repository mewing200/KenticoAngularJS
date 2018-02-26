import { Routes } from '@angular/router';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { MyServiceService } from './my-service.service';
import { MycomponentComponent } from './mycomponent/mycomponent.component';
import { MainComponent } from './main/main.component';



export const routes: Routes = [
  { path: '', component: MainComponent, pathMatch: 'full'},
  { path: 'feature', loadChildren: './feature-module/feature-module.module#FeatureModuleModule'}
];

@NgModule({
  declarations: [
    AppComponent,
    MycomponentComponent,
    MainComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  providers: [MyServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
