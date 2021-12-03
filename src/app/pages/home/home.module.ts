import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';

import { HomePageRoutingModule } from './home-routing.module';
import { InfiniteTypeDeleteModule } from 'ngx-sbz-type-delete';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        HomePageRoutingModule,
        InfiniteTypeDeleteModule
    ],
    declarations: [HomePage]
})
export class HomePageModule { }
