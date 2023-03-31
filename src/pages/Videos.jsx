import React from "react";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import FakeYoutube from "../\bapi/fakeYoutube";
import VideoCard from "../components/VideoCard";

export default function Videos() {
  const { keyword } = useParams(); // 검색 keyword를 찾기 위한 useParam
  const {
    isLoading,
    error,
    data: videos,
  } = useQuery(["videos", keyword], () => {
    const youtube = new FakeYoutube();
    return youtube.search(keyword);
  });
  return (
    <>
      <div>{keyword ? `🔍${keyword}` : "🔥"}</div>
      {isLoading && <p>Loading...</p>}
      {error && <p>Something is wrong 👻</p>}
      {videos && (
        <ul>
          {videos.map((video) => (
            <VideoCard key={video.id} video={video} />
          ))}
        </ul>
      )}
    </>
  );
}
