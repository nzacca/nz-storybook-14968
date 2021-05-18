import { Component, EventEmitter, Output } from "@angular/core";
import { ParentComponent } from "./parent.component";

@Component({
  selector: "app-derived",
  template: `
    <button (click)="callLocalOutput()">This button should show in action log as expected</button>
    <br/><br/>
    <button (click)="callParentOutput()">This button should show in action log but causes error in the console</button>
    `,
})
export class DerivedComponent extends ParentComponent {
  @Output() readonly localOutput = new EventEmitter<string>();

  callParentOutput(): void {
    this.parentOutput.emit(this.foo);
  }
  
  callLocalOutput(): void {
    this.localOutput.emit(this.foo);
  }
}
