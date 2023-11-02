import { Component, OnInit } from '@angular/core';

@Component({
  selector: "app-navbar",
  templateUrl: "./navbar.component.html",
  styleUrls: ["./navbar.component.scss"],
})
export class NavbarComponent implements OnInit {
  ngOnInit(): void {
    document.getElementById("userMenu")?.classList.add("hide");
  }

  topMenu: any = [
    {
      label: "Food",
      link: "/men",
    },
    {
      label: "Accessories",
      link: "",
    },
    {
      label: "Cat Care",
      link: "",
    },
    {
      label: "Shelters",
      link: "",
    }
  ];

  showMenu() {
    let el = document.getElementById("userMenu");
    let menuButton = document.getElementById("user-menu-button");
    if (el?.classList.contains("hide")) {
      el.classList.remove("hide");
      el.classList.add(
        "show absolute bg-white focus:outline-none mt-2 origin-top-right py-1 right-0 ring-1 ring-black ring-opacity-5 rounded-md shadow-lg w-48 z-10 hide"
      );
    } else {
      el?.classList.add("hide");
      el?.classList.remove(
        "show absolute bg-white focus:outline-none mt-2 origin-top-right py-1 right-0 ring-1 ring-black ring-opacity-5 rounded-md shadow-lg w-48 z-10 hide"
      );
    }
  }
  // focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800
}
