import React from "react";
import { useParams } from "react-router-dom";

export default function Videos() {
  const { keyword } = useParams(); // 검색 keyword를 찾기 위한 useParam
  return <div>{keyword ? `🔍${keyword}` : "🔥"}</div>;
}
