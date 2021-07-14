import Header from "components/Header/Header";
import React from "react";
import "./StorageBox.scss";
import axios from "axios";
import { SERVER } from "../../config/config.json";
import { useState } from "react";

const StorageBox = () => {
  const [postList, setPostList] = useState([]);
  const [number, setNumber] = useState(1);

  const getPostByHot = async () => {
    try {
      const res = await axios.get(`${SERVER}/like/hotlist`);
      const data = res.data.data.posts;
      setPostList(data);
      setNumber(number + 1);
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <>
      <Header />
      <div>
        <div className="storageMenu">
          <button className="sMenuSpan" onClick={getPostByHot}>
            내가 작성한 글
          </button>
          <button className="sMenuSpan">좋아요</button>
        </div>
        <div className="storageTitle">
          <span className="sTitleSpan">번호</span>
          <span className="sTitleSpan">제목</span>
          <span className="sTitleSpan">날짜</span>
          <span className="sTitleSpan">좋아요</span>
        </div>
        {postList ? (
          <div className="content">
            {postList.map((post) => {
              return (
                <div className="com">
                  <div className="con-num">{number}</div>
                  <div className="com-title">제목: {post.title}</div>
                  <div className="com-like">좋아요:{post.countLike}</div>
                </div>
              );
            })}
          </div>
        ) : null}
      </div>
    </>
  );
};

export default StorageBox;
