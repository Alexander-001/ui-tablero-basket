import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ScoreboardRoutingModule } from './scoreboard.routing.module';
import { SharedModule } from '../shared/shared.module';
import { LayoutPageComponent } from './pages/layout-page/layout-page.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { MaterialModule } from '../material/material.module';
import { ScoreModalComponent } from './components/score-modal/score-modal.component';
import { AddSubstractArrowComponent } from './components/add-substract-arrow/add-substract-arrow.component';

@NgModule({
  declarations: [
    LayoutPageComponent,
    HomePageComponent,
    ScoreModalComponent,
    AddSubstractArrowComponent,
  ],
  imports: [
    ScoreboardRoutingModule,
    CommonModule,
    ReactiveFormsModule,
    SharedModule,
    MaterialModule,
    FormsModule,
  ],
})
export class ScoreboradModule {}
