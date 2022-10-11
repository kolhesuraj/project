import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomersRoutingModule } from './customers-routing.module';
import { ProfileComponent } from './profile/profile.component';
import { MatIconModule } from '@angular/material/icon';
import { EditProfileComponent } from './edit-profile/edit-profile.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { AddressActionComponent } from './address-action/address-action.component';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { ImageCropperModule } from 'ngx-image-cropper';
import { CartComponent } from './cart/cart.component';
import { CheckOutComponent } from './check-out/check-out.component';
import { NgDompurifyModule } from '@tinkoff/ng-dompurify';
import { MatStepperModule } from '@angular/material/stepper';
import { MatFormFieldModule } from '@angular/material/form-field';
import { CustomerHeaderComponent } from './customer-header/customer-header.component';

@NgModule({
  declarations: [
    ProfileComponent,
    EditProfileComponent,
    ChangePasswordComponent,
    AddressActionComponent,
    CartComponent,
    CheckOutComponent,
    CustomerHeaderComponent,
  ],
  imports: [
    CommonModule,
    CustomersRoutingModule,
    MatIconModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatDialogModule,
    ImageCropperModule,
    NgDompurifyModule,
    MatStepperModule,
    MatFormFieldModule
  ],
})
export class CustemersModule {}
