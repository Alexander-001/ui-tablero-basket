import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReactiveFormsModule } from '@angular/forms';
import { ScoreboardRoutingModule } from './scoreboard.routing.module';
import { SharedModule } from '../shared/shared.module';
import { LayoutPageComponent } from './pages/layout-page/layout-page.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { MaterialModule } from '../material/material.module';

@NgModule({
  declarations: [LayoutPageComponent, HomePageComponent],
  imports: [
    ScoreboardRoutingModule,
    CommonModule,
    ReactiveFormsModule,
    SharedModule,
    MaterialModule,
  ],
})
export class ScoreboradModule {}
