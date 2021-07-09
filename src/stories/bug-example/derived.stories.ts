import { Meta, moduleMetadata } from "@storybook/angular";
import { DerivedComponent } from "./derived.component";
import { DerivedModule } from "./derived.module";

export default {
  title: "Test Derived Component with args",
  component: DerivedComponent,
  decorators: [moduleMetadata({ imports: [DerivedModule]})],
  argTypes: {
    parentOutput: {
      action: "Parent"
    },
    localOutput: {
      action: "Local"
    }
  }
} as Meta;

export const TestDerived = (args: any) => ({
  props: {
    parentInput: "Hello World",
    localInput: "Bar",
    parentInputObject: { newValue: "bar" },
    ...args
  }
});
