import {NgModule} from '@angular/core';
import {CommonModule} from "@angular/common";
import {SharedModule} from "../../@shared/shared.module";
import {ColorsComponent} from "./colors.component";
import {ColorsRoutingModule} from "./colors-routing.module";
import {FlexLayoutModule} from "@angular/flex-layout";


@NgModule({
  declarations: [ColorsComponent],
  imports: [
    CommonModule,
    SharedModule,
    FlexLayoutModule,
    ColorsRoutingModule
  ],
  exports: []
})
export class ColorsModule {
}
