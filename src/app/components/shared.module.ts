import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer/footer.component';
import { IonicModule } from '@ionic/angular';
import { ChatComponent } from './chat/chat.component';
import { TestimonialsComponent } from './testimonials/testimonials.component';
import { SliderComponent } from './slider/slider.component';
import { SubscriptionComponent } from './subscription/subscription.component';
import { HeaderComponent } from './header/header.component';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TitleComponent } from './title/title.component';

@NgModule({
  declarations: [
    FooterComponent,
    ChatComponent,
    TestimonialsComponent,
    SliderComponent,
    SubscriptionComponent,
    HeaderComponent,
    TitleComponent
  ],
  exports: [
    FooterComponent,
    ChatComponent,
    TestimonialsComponent,
    SliderComponent,
    SubscriptionComponent,
    HeaderComponent,
    TitleComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    IonicModule,
    CarouselModule.forRoot()
  ]
})
export class SharedModule {}
