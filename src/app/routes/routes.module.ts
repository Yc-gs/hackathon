import { NgModule } from '@angular/core';

import { SharedModule } from '@shared';
import { RouteRoutingModule } from './routes-routing.module';
// passport pages
// single pages
import { HomeComponent } from './home/home.component';

const COMPONENTS = [
  // passport pages
  // single pages
];
const COMPONENTS_NOROUNT = [];

@NgModule({
  imports: [SharedModule, RouteRoutingModule],
  declarations: [
    ...COMPONENTS,
    ...COMPONENTS_NOROUNT,
    HomeComponent,
  ],
  entryComponents: COMPONENTS_NOROUNT,
})
export class RoutesModule { }
