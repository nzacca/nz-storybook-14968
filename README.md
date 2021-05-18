# Storybook

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 11.2.13.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

## Reproduction Instructions

1. Start the Test Derived Example
2. Click the first button which works as expected.
3. Click the second button which does not and raises an error in the console: `DerivedComponent.html:4 ERROR TypeError: this.parentOutput.emit is not a function`

Problem appears to be that the Storybook handling for retrieving the Component props does not traverse the Component tree and only looks at the current Component.

https://github.com/storybookjs/storybook/blob/next/app/angular/src/client/preview/angular-beta/utils/NgComponentAnalyzer.ts#L109

May need to do handling similar to what is done in Angular which traverses the tree and obtains all metadata:

https://github.com/angular/angular/blob/a92a89b0eb127a59d7e071502b5850e57618ec2d/packages/core/src/reflection/reflection_capabilities.ts#L251
