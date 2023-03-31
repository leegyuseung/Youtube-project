import axios from "axios";

export default class Youtube {
  constructor() {
    this.httpClient = axios.create({
      baseURL: "https://www.googleapis.com/youtube/v3",
      params: { key: process.env.REACT_APP_YOUTUBE_API_KEY },
    });
  }

  async search(keyword) {
    // #을 붙이면 private 함수이다.
    return keyword ? this.#searchByKeyword(keyword) : this.#mostPopular();
  }

  // id를 video.Id로 덮어씌워주기 => search는 json 형태로 id가 들어가있어서.
  async #searchByKeyword(keyword) {
    return this.httpClient
      .get("search", {
        params: { part: "snippet", maxResults: 25, type: "video", q: keyword },
      })
      .then((res) => res.data.items)
      .then((items) => items.map((item) => ({ ...item, id: item.id.videoId })));
  }

  async #mostPopular() {
    return this.httpClient
      .get("videos", {
        params: {
          part: "snippet",
          maxResults: 25,
          chart: "mostPopular",
        },
      })
      .then((res) => res.data.items);
  }
}
