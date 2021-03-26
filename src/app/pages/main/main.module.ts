import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppShareModule } from '../../app-share.module';

import { MainRoutingModule } from './main-routing.module';
import { MainComponent } from './main.component';
import { HeaderComponent } from './layout/header/header.component';
import { NotifiComponent } from './layout/notifi/notifi.component';
import { ProjectComponent } from './project/project.component';

@NgModule({
    declarations: [
        MainComponent,
        HeaderComponent,
        NotifiComponent,
        ProjectComponent
    ],
    imports: [
        CommonModule,
        MainRoutingModule,
        AppShareModule
    ]
})
export class MainModule { }
