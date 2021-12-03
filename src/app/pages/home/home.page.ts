import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { AlertController, IonSlides } from '@ionic/angular';
import { ComponentsService } from 'src/app/services/components/components.service';

@Component({
    selector: 'app-home',
    templateUrl: 'home.page.html',
    styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
    @ViewChild('mySlider') slides: IonSlides;
    slideOptions = { slidesPerView: 'auto', zoom: false, autoplay: false, loop: false, spaceBetween: 0 };

    constructor(
        public alertController: AlertController,
        public myElement: ElementRef
    ) { }

    ngOnInit() {
    }

    async workingOnThat() {
        const alert = await this.alertController.create({
            header: 'Case study coming soon 😅',
            message: 'Im writing every case study...',
            buttons: [
                {
                    text: 'Cancel',
                    role: 'cancel',
                    handler: (blah) => {
                        console.log('Confirm Cancel: blah');
                    }
                }, {
                    text: 'Okay',
                    handler: () => {
                        console.log('Confirm Okay');
                    }
                }
            ]
        });

        await alert.present();
    }

    scrollTo(idContainer) {
        document.getElementById(idContainer).scrollIntoView({
            behavior: 'smooth',
            block: 'start',
            inline: 'nearest'
        });
    }

    swipeNext() {
        this.slides.slideNext();
    }

    swipePrev() {
        this.slides.slidePrev();
    }
}
