import 'hammerjs';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { DemoMaterialModule } from '../demo-material-module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ChartistModule } from 'ng-chartist';
import { ChartsModule } from 'ng2-charts';
import { NgCircleProgressModule } from 'ng-circle-progress';
import { HomeRoutes } from './home.routing';
import { HomeComponent } from './home.component';
import { MystoryCircleProgressComponent } from './mystory-circle-progress/mystory-circle-progress.component';
import { ModalComponent } from './modal/modal.component';
import { FormsModule } from '@angular/forms';
@NgModule({
  imports: [
    CommonModule,
    DemoMaterialModule,
    FlexLayoutModule,
    ChartistModule,
    ChartsModule,
    FormsModule,
    RouterModule.forChild(HomeRoutes),
    NgCircleProgressModule.forRoot({
      // set defaults here
      radius: 30,
      outerStrokeWidth: 4,
      innerStrokeWidth: 0,
      animation: true,
      animationDuration: 300,
      backgroundPadding: 2,
      showSubtitle: false
    })
  ],
  entryComponents:[ ModalComponent ],
  declarations: [HomeComponent,MystoryCircleProgressComponent, ModalComponent]
})
export class HomeModule { }
