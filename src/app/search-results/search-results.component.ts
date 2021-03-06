import { Component, OnInit } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-search-results",
  templateUrl: "./search-results.component.html",
  styleUrls: ["./search-results.component.scss"]
})
export class SearchResultsComponent implements OnInit {
  name: string;

  constructor(private httpClient: HttpClient, private route: ActivatedRoute) {}

  public gameSearchResults;
  private propertySortedAsc = {
    name: false,
    popularity: false
  };

  async findGames() {
    const gameTitle: string = this.name;
    const url: string = `http://localhost:8080/IGDB/search`;
    console.log(gameTitle);
    const gameSearchResults = await this.httpClient
      .post(url, `"${gameTitle}"`)
      .toPromise();

    return gameSearchResults;
  }

  sortByProperty(property: string) {
    this.gameSearchResults.sort((a: string, b: string) =>
      a[property]
        .toString()
        .localeCompare(b[property])
        .toString()
    );

    if (this.propertySortedAsc[property]) {
      this.gameSearchResults = this.gameSearchResults.reverse();
    }

    this.propertySortedAsc[property] = !this.propertySortedAsc[property];
  }

  async ngOnInit() {
    this.route.params.subscribe(params => {
      this.name = params["name"];
    });
    this.gameSearchResults = await this.findGames();
  }
}
