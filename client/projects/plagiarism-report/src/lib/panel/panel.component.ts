import { Component } from "@angular/core";

@Component({
  selector: "cr-panel",
  templateUrl: "./panel.component.html",
  styleUrls: ["./panel.component.sass"],
})
export class PanelComponent {}

@Component({
  selector: "cr-panel-header",
  template: "<ng-content></ng-content>",
  styleUrls: ["./panel.component.sass"],
})
export class PanelHeaderComponent {}

@Component({
  selector: "cr-panel-actions",
  template: ` <ng-content accept="cr-panel-action"></ng-content> `,
  styleUrls: ["./panel.component.sass"],
})
export class PanelActionsComponent {}

@Component({
  selector: "cr-panel-action",
  template: `
    <ng-content></ng-content>
    <mat-divider vertical="true"></mat-divider>
  `,
  styleUrls: ["./panel.component.sass"],
})
export class PanelActionComponent {}

@Component({
  selector: "cr-panel-body",
  template: "<ng-content></ng-content>",
  styleUrls: ["./panel.component.sass"],
})
export class PanelBodyComponent {}
