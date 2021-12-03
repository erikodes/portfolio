import { Component } from '@angular/core';
import { ComponentsService } from './services/components/components.service';
import { Router } from '@angular/router';

@Component({
    selector: 'app-root',
    templateUrl: 'app.component.html',
    styleUrls: ['app.component.scss'],
})
export class AppComponent {

    cookies: any = true;
    data: any = false;

    constructor(
        public component: ComponentsService,
        public router: Router
    ) {
        this.router.navigateByUrl('');

        setTimeout(() => {
            this.data = true;
        }, 4500);
    }

    closeCookies() {
        this.cookies = false;
    }
}
