import {NgModule} from '@angular/core';
import {CommonModule} from "@angular/common";
import {SharedModule} from "../../@shared/shared.module";
import {UserProfileComponent} from "./user-profile.component";
import {UserProfileRoutingModule} from "./user-profile-routing.module";
import {FlexLayoutModule} from "@angular/flex-layout";


@NgModule({
  declarations: [UserProfileComponent],
  imports: [
    CommonModule,
    SharedModule,
    FlexLayoutModule,
    UserProfileRoutingModule
  ],
  exports: []
})
export class UserProfileModule {
}
