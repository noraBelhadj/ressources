import { NgModule } from '@angular/core';
import { CommonModule} from '@angular/common';
import { RouterModule} from '@angular/router';

import { LoginComponent } from './login.component';
import { LoginRoutingModule } from './login-routing.module';



@NgModule({
  imports: [
    CommonModule,
    LoginRoutingModule

  ],
  declarations: [
    LoginModule
  ]
})

export class LoginModule {}
