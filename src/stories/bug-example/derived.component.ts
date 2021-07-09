import { Component, EventEmitter, Input, Output } from "@angular/core";
import { ParentComponent } from "./parent.component";

@Component({
  selector: "app-derived",
  template: `
    <div>Show Parent Input Value: {{parentInput}}</div>
    <div>Show Local Input Value: {{localInput}}</div>
    <div>Show Parent Input Object Value: {{parentInputObject?.newValue}}</div>
    <button (click)="callLocalOutput()">This button should show in action log as expected</button>
    <br/><br/>
    <button (click)="callParentOutput()">This button should show in action log but causes error in the console</button>
    `,
})
export class DerivedComponent extends ParentComponent {
  @Input() localInput = "foo";
  @Output() readonly localOutput = new EventEmitter<string>();

  callParentOutput(): void {
    this.parentOutput.emit(this.parentInput);
  }
  
  callLocalOutput(): void {
    this.localOutput.emit(this.parentInput);
  }
}
