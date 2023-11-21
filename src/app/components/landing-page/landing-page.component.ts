import { Component, OnInit } from '@angular/core';
import { SharedService } from '../shared.service';

@Component({
  selector: "app-landing-page",
  templateUrl: "./landing-page.component.html",
  styleUrls: ["./landing-page.component.scss"],
})
export class LandingPageComponent implements OnInit {
  constructor(public sharedService: SharedService) {}

  ngOnInit(): void {
    this.getAllProducts()
  }

  getAllProducts() {
    this.sharedService.getAllProducts().subscribe((res: any) => {
      this.featuredProducts = res;
    });
  }
  featuredProducts: any = [];

  showModal: boolean = false;
  cardDisplayInsideModal:any
  openAddModal(card:any) {
    this.showModal = true;
    this.cardDisplayInsideModal = card
    console.log("HERE", this.showModal);
  }

  
}


