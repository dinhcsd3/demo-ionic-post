import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-home",
  templateUrl: "home.page.html",
  styleUrls: ["home.page.scss"],
})
export class HomePage implements OnInit {
  urlImg = [];
  imageCount: number = 1;
  constructor() {}

  ngOnInit(): void {}

  urlImageDynamic(imgName: number) {
    return `assets/images/natural/${imgName.toString()}.jpg`;
  }

  handleImage(event: boolean) {
    if (event && this.imageCount <= 8) {
      this.imageCount++;
      let obj = {
        key: this.imageCount,
        url: this.urlImageDynamic(this.imageCount),
      };
      this.urlImg.push(obj);
    } else if (this.urlImg.length > 1) {
      let index = this.urlImg.findIndex((x) => x.key === this.imageCount);
      if (index > -1) {
        this.urlImg.splice(index, 1);
      }
    }
  }
}
