import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AnimationOptions } from 'ngx-lottie';

@Component({
    selector: 'app-splash',
    templateUrl: './splash.page.html',
    styleUrls: ['./splash.page.scss'],
})
export class SplashPage implements OnInit {

    options: AnimationOptions = {
        path: '/assets/animations/splash.json',
        loop: true,
        autoplay: true,
    };

    constructor(
        public router: Router
    ) {
        setTimeout(() => {
            this.router.navigateByUrl('home');
        }, 4000);
    }

    ngOnInit() {
    }

}
