import { Component } from '@angular/core';
import { ContainerComponent } from "../shared/container/container.component";
import { BannerComponent } from "../shared/banner/banner.component";
import { CardComponent } from "../shared/card/card.component";

@Component({
    selector: 'app-home',
    standalone: true,
    templateUrl: './home.component.html',
    styleUrl: './home.component.scss',
    imports: [ContainerComponent, BannerComponent, CardComponent]
})
export class HomeComponent {

}
