import { Routes } from '@angular/router';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeatureComponentComponent } from './feature-component/feature-component.component';

export const routes: Routes = [
  { path: '', component: FeatureComponentComponent }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  declarations: [FeatureComponentComponent]
})
export class FeatureModuleModule {

}
