import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BasketComponent } from './basket.component';
import { BasketRoutingFlatModule } from './basket-routing--flat/basket-routing--flat.module';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [BasketComponent],
  imports: [CommonModule, BasketRoutingFlatModule, SharedModule],
})
export class BasketModule {}
