// This is login feature module.

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { AdminLoginComponent } from './admin-login/admin-login.component';
import { SharedMaterialModule } from '../shared/shared-material.module';
import { HttpClientModule } from '@angular/common/http';

/**
 * NgModule decorator that holds all the imported modules.
 * It also exports the modules for other modules to use them.
 */
@NgModule({
  declarations: [AdminLoginComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    SharedMaterialModule
  ],
  exports: [
    ReactiveFormsModule,
    FormsModule,
    AdminLoginComponent,
    SharedMaterialModule
  ]
})

/**
 * This is the class that will be imported wherever needed.
 */
export class LoginModule {
  constructor() {
    console.log("Login Module loaded.");
  }
 }
