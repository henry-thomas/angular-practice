import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashComponent } from './dash/dash.component';
import { DevicesComponent } from './devices/devices.component';


const routes: Routes = [{ path: 'dashboard', component: DashComponent }, { path: 'devices', component: DevicesComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
