import {RouterModule, Routes} from "@angular/router";
import {NgModule} from "@angular/core";
import {PageComponent} from "./page.component";

export declare const enum Route {
  Dashboard = 'dashboard',
  Colors = 'colors',
  Typography = 'typography',
  Icons = 'icons',
  UserProfile = 'profile',
}

const routes: Routes = [
  {
    path: '',
    component: PageComponent,
    children : [
      {
        path: `${Route.Dashboard}`,
        loadChildren: () => import('../@pages/dashboard/dashboard.module')
          .then(dashboard => dashboard.DashboardModule),
      },
      {
        path: `${Route.Colors}`,
        loadChildren: () => import('../@pages/colors/colors.module')
          .then(colors => colors.ColorsModule),
      },
      {
        path: `${Route.Typography}`,
        loadChildren: () => import('../@pages/typography/typography.module')
          .then(typography => typography.TypographyModule),
      },
      {
        path: `${Route.Icons}`,
        loadChildren: () => import('../@pages/icons/icons.module')
          .then(icon => icon.IconsModule),
      },
      {
        path: `${Route.UserProfile}`,
        loadChildren: () => import('../@pages/user-profile/user-profile.module')
          .then(user => user.UserProfileModule),
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PageRoutingModule {
}
