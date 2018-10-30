import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { RouterModule } from '@angular/router'
import { FormsModule } from '@angular/forms'
@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    FormsModule
  ],
  exports: [
    CommonModule,
    NavbarComponent,
    RouterModule,
    FormsModule

  ],
  declarations: [NavbarComponent]
})
export class SharedModule { }
