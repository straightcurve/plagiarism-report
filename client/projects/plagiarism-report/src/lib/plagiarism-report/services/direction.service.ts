import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class DirectionService {
  private _dir: "rtl" | "ltr" = "ltr";

  get dir() {
    return this._dir;
  }
  /**
   * set the html direction of the report
   * @param value the direction value
   */
  setDir(value: "rtl" | "ltr") {
    this._dir = value;
  }
}
