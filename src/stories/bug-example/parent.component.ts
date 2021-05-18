import { Directive, EventEmitter, Input, Output } from "@angular/core";

@Directive()
export abstract class ParentComponent {
  @Input() foo: string = "test";
  @Output() readonly parentOutput = new EventEmitter<string>();
}
