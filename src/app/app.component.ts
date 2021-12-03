import { Component } from '@angular/core';
import { ComponentsService } from './services/components/components.service';

@Component({
    selector: 'app-root',
    templateUrl: 'app.component.html',
    styleUrls: ['app.component.scss'],
})
export class AppComponent {

    cookies: any = true;

    constructor(
        public component: ComponentsService
    ) { }

    closeCookies() {
        this.cookies = false;
    }
}
