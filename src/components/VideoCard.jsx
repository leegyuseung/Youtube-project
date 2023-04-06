import React from "react";
import { formatAgo } from "../utils/date";
import { useNavigate } from "react-router-dom";

export default function VideoCard({ video }) {
  const { title, thumbnails, channelTitle, publishedAt } = video.snippet;
  const navigate = useNavigate();
  return (
    <li
      onClick={() => {
        // 두번 째 인자로 데이터를 보내준다.
        navigate(`videos/watch/${video.id}`, { state: { video } });
      }}
    >
      <img className="w-full" src={thumbnails.medium.url} alt={title} />
      <div>
        <p className="font-semibold my-2 line-clamp-2">{title}</p>
        <p className="text-sm opacity-80">{channelTitle}</p>
        <p className="text-sm opacity-80">{formatAgo(publishedAt, "ko")}</p>
      </div>
    </li>
  );
}
