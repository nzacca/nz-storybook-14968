import { Directive, EventEmitter, Input, Output } from "@angular/core";

@Directive()
export abstract class ParentComponent {
  @Input() parentInput = "test";
  @Input() parentInputObject?: any;
  @Output() readonly parentOutput = new EventEmitter<string>();
}
