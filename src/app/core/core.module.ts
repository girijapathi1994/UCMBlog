import { AlertService } from './alert.service';
import { AuthService } from './auth.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [],
  providers:[AuthService,AlertService]
})
export class CoreModule { }
