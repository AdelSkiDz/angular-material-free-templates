import { Component } from '@angular/core';
import {AppService} from "../../@core/services/app.service";
import {Route} from "../page-routing.module";
import {ContentTopValueComponent} from "../layout/content-top/content-top-value.component";
import {PeriodicElement} from "../typography/typography.component";

@Component({
  selector: 'app-colors',
  templateUrl: './colors.component.html',
  styleUrls: ['./colors.component.scss']
})
export class ColorsComponent extends ContentTopValueComponent {
  dataSource = ELEMENT_DATA;
  dataSourceHtml = ELEMENT_DATA_HTML;
  codeSCSS = `
   $theme-colors: (
      "warning":    $app-warning,
      "success":    $app-success,
      "danger":     $app-danger,
      "optional":   $app-optional,
      "default":    $app-default,
      "info":       $app-info,
   );
 `
  constructor(_appService: AppService) {
    super(_appService);
  }


  override: any // @ts-ignore
  valueContentTopArray() {
    return [
      {actived: false, name: 'Home', routerLink: Route.Dashboard},
      {actived: false, name: ' / ', routerLink: '/'},
      {actived: true, name: Route.Colors, routerLink: Route.Colors}
    ];
  }
}

const ELEMENT_DATA: PeriodicElement[] = [
  {header: 'app-warning-bg', value: 'linear-gradient(60deg,#ffa726,#fb8c00)'},
  {header: 'app-success-bg', value: 'linear-gradient(60deg,#66bb6a,#43a047)'},
  {header: 'app-danger-bg', value: 'linear-gradient(60deg,#ef5350,#e53935)'},
  {header: 'app-optional-bg', value: 'linear-gradient(60deg,#ab47bc,#8e24aa)'},
  {header: 'app-default-bg', value: '#999'},
  {header: 'app-info-bg', value: '#00bcd4'}
];

const ELEMENT_DATA_HTML: PeriodicElement[] = [
  {header: '<div class="app-warning-bg"></div>'},
  {header: '<div class="app-success-bg"></div>'},
  {header: '<div class="app-danger-bg"></div>'},
  {header: '<div class="app-optional-bg"></div>'},
  {header: '<div class="app-default-bg"></div>'},
  {header: '<div class="app-info-bg"></div>'},
  {header: '<div class="app-primary-bg"></div>'}
];








