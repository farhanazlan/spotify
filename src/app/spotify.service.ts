import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {
  getHeader(query: string) {
    const url = "https://api.spotify.com/v1/" + query;
    let headers = new HttpHeaders();
    headers = headers.append(
      "Authorization",
      "Bearer BQBV6ja-3ooFy_yNGsAQZbN4wUYYv8g5f0B5QvEUL0uQmf4VNciM2bbNrX_03E-W5egtowzmCPQOk5VaxTCZzJVfdFKKFBI2X0r36hfKEFDw9rrZsBl5_7viQia-OZVVlGdsqvIkwlUKC5ntf78CyFiz9gLdEH-JiK5De-0"
    );
    return this._http.get(url, { headers });
  }
  constructor(private _http: HttpClient) {}

  searchMusic(str: string, type = "artist") {
    const param = "&offset=0" + "&limit=20" + "&type=" + type + "&market=US";
    const query = "search?query=" + str + param;
    return this.getHeader(query);
  }

  searchArtistAlbum(id: string) {
    const query = `artists/${id}/albums`;
    return this.getHeader(query);
  }

  searchArtist(id: string) {
    const query = `artists/${id}`;
    return this.getHeader(query);
  }

  searchAlbumById(id: string) {
    const query = `albums/${id}`;
    return this.getHeader(query);
  }

  searchAlbumByIdTracks(id: string) {
    const query = `albums/${id}/tracks`;
    return this.getHeader(query);
  }
}
