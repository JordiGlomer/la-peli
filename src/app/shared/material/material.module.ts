import { NgModule } from '@angular/core';
import { MatGridListModule } from "@angular/material/grid-list";
import { MatCardModule } from "@angular/material/card";
import { MatButtonModule } from "@angular/material/button";
@NgModule({
  declarations: [],
  exports:[
    MatGridListModule,
    MatCardModule,
    MatButtonModule
  ]
})
export class MaterialModule { }
