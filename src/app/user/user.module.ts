import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ProfileComponent } from './profile/profile.component';
import { RouterModule } from '@angular/router';
import { UserRoutes } from './user.routing';
import { PanelModule } from 'primeng/primeng';
import { FormsModule } from '@angular/forms';
import { AuthService } from './auth-service';

@NgModule({
  imports: [
    CommonModule, RouterModule.forChild(UserRoutes), PanelModule, FormsModule
  ],
  declarations: [LoginComponent, RegisterComponent, ProfileComponent],
  providers: [AuthService]
})
export class UserModule { }
