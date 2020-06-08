import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccountRoutingModule } from './account-routing.module';
import { SharedModule } from '../shared/shared.module';
import { TextInputComponent } from '../shared/components/text-input/text-input.component';

@NgModule({
  declarations: [],
  imports: [CommonModule, AccountRoutingModule, SharedModule],
})
export class AccountModule {}
