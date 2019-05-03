import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';

export const routes : Routes = [

    {
        path: 'login',
        loadChildren: './login/login.module#LoginModule'
      },
];