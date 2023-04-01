import { createContext, useContext } from "react";
import FakeYoutube from "../\bapi/fakeYoutube";

export const YoutubeApiContext = createContext();

// const youtube = new Youtube();
const youtube = new FakeYoutube();

export function YoutubeApiProvider({ children }) {
  return (
    <YoutubeApiContext.Provider value={{ youtube }}>
      {children}
    </YoutubeApiContext.Provider>
  );
}

export function useYoutubeApi() {
  return useContext(YoutubeApiContext);
}
