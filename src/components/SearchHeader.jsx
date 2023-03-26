import React, { useEffect, useState } from "react";
import { BsSearch, BsYoutube } from "react-icons/bs";
import { Link, useNavigate, useParams } from "react-router-dom";

export default function SearchHeader() {
  const { keyword } = useParams();
  const navigate = useNavigate(); // handleSubmit으로 검색을 위한 navigate
  const [text, setText] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(`/videos/${text}`);
  };

  useEffect(() => {
    setText(keyword || "");
  }, [keyword]);

  return (
    <header>
      {/* logo 부분 */}
      {/* Link로 최상위 부분으로 갈 수 있게 만듬 */}
      <Link to="/">
        <BsYoutube />
        <h1>Youtube</h1>
      </Link>
      {/* 검색 부분 */}
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Search..."
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <button>
          <BsSearch />
        </button>
      </form>
    </header>
  );
}
