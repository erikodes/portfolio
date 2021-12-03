import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { LottieModule } from 'ngx-lottie';

import { IonicModule } from '@ionic/angular';

import { SplashPageRoutingModule } from './splash-routing.module';
import player from 'lottie-web';
import { SplashPage } from './splash.page';

export function playerFactory() {
    return player;
}

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        SplashPageRoutingModule,
        LottieModule.forRoot({ player: playerFactory })
    ],
    declarations: [SplashPage]
})
export class SplashPageModule { }
