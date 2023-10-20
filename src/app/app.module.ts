import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MatSidenavModule } from "@angular/material/sidenav";
import { MatToolbarModule } from "@angular/material/toolbar";
import { ButtonModule } from "primeng/button";
import { CardModule } from "primeng/card";
import { InputTextModule } from "primeng/inputtext";
import { DropdownModule } from "primeng/dropdown";
import { SidebarModule } from "primeng/sidebar";

import { ToastModule } from "primeng/toast";
import { BreadcrumbModule } from "primeng/breadcrumb";
import { TableModule } from "primeng/table";
import { CheckboxModule } from "primeng/checkbox";
import { HeaderComponent } from "./components/header/header.component";

@NgModule({
  declarations: [AppComponent, HeaderComponent],
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
    MatSidenavModule,
    MatToolbarModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
