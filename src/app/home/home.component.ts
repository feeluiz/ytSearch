import { Component, OnInit } from "@angular/core";
import { FormControl } from "@angular/forms";
import { YoutubeService } from "../services/youtube.service";

@Component({
  selector: "app-root",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"]
})
export class HomeComponent implements OnInit {
  videos = [];

  q = new FormControl("");

  // Search for a specified string.
  constructor(private youTubeService: YoutubeService) {}

  ngOnInit() {
    this.videos = [];
    this.q.setValue("Caneta Azul");
    this.youTubeService.getVideos(this.q.value, 20).subscribe(response => {
      for (let items of response["items"]) {
        this.videos.push(items);
      }
    });
  }

  onSubmit() {
    this.videos = [];
    this.youTubeService.getVideos(this.q.value, 20).subscribe(response => {
      for (let items of response["items"]) {
        this.videos.push(items);
      }
    });
  }
}
