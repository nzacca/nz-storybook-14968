import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { DerivedComponent } from "./derived.component";

@NgModule({
  declarations: [DerivedComponent],
  imports: [CommonModule],
  exports: [DerivedComponent],
})
export class DerivedModule {}
