import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ContactanosPageRoutingModule } from './contactanos-routing.module';

import { ContactanosPage } from './contactanos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    ContactanosPageRoutingModule
  ],
  declarations: [ContactanosPage]
})
export class ContactanosPageModule {}
