import { Component } from '@angular/core';

@Component({
  selector: "app-landing-page",
  templateUrl: "./landing-page.component.html",
  styleUrls: ["./landing-page.component.scss"],
})
export class LandingPageComponent {
  featuredProducts: any = [
    {
      image:
        "https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg",
      title: "Basic Tee",
      desciption: "Black",
      alt: "Front of men&#039;s Basic Tee in black.",
      price: "35",
      remainingQty: "2",
    },
    {
      image: "",
      title: "card 2",
      desciption: "desc card 2",
      price: "13",
      alt: "Front of men&#039;s Basic Tee in black.",
      remainingQty: "3",
    },
    {
      image: "",
      title: "card 3",
      desciption: "desc card 3",
      alt: "Front of men&#039;s Basic Tee in black.",
      price: "14",
      remainingQty: "4",
    },
  ];

  showModal:boolean = false
  openAddModal() {
    
    this.showModal = true
    console.log("HERE", this.showModal);
  }
}


