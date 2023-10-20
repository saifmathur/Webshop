import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MatSidenavModule } from "@angular/material/sidenav";
import { ButtonModule } from "primeng/button";
import { CardModule } from "primeng/card";
import { InputTextModule } from "primeng/inputtext";
import { DropdownModule } from "primeng/dropdown";
import { SidebarModule } from "primeng/sidebar";
import { ToastModule } from "primeng/toast";
import { BreadcrumbModule } from "primeng/breadcrumb";
import { TableModule } from "primeng/table";
import { CheckboxModule } from "primeng/checkbox";

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    ButtonModule,
    CardModule,
    InputTextModule,
    DropdownModule,
    SidebarModule,
    ToastModule,
    BreadcrumbModule,
    TableModule,
    CheckboxModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
