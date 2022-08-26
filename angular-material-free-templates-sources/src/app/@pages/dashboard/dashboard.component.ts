import {Component} from '@angular/core';
import {AppService} from "../../@core/services/app.service";
import {ContentTopValueComponent} from "../layout/content-top/content-top-value.component";
import {Route} from "../page-routing.module";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent extends ContentTopValueComponent {

  constructor(_appService: AppService) {
    super(_appService);
  }

  override: any // @ts-ignore
  valueContentTopArray() {
    return [
      {actived: false, name: 'Home', routerLink: Route.Dashboard},
      {actived: false, name: ' / ', routerLink: '/'},
      {actived: true, name: Route.Dashboard, routerLink: Route.Dashboard}
    ]
  }

}
