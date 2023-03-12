import { useState } from "react";

import Post from "./Post";
import NewPost from "./NewPost";
import Modal from "./Modal";
import classes from "./PostList.module.css";

function PostList({ isPosting, onStopPosting }) {
  const [posts, setPosts] = useState([]);

  function addPostHandler(postData) {
    setPosts((existingPosts) => [postData, ...existingPosts]);
  }

  return (
    <>
      {isPosting && (
        <Modal onClose={onStopPosting}>
          <NewPost onCancel={onStopPosting} onAddPost={addPostHandler} />
        </Modal>
      )}
      <ul className={classes.posts}>
        {posts.length > 0 &&
          posts.map((post) => <Post author={post.author} body={post.body} />)}
      </ul>
      {posts.length === 0 && (
        <div style={{ textAlign: "center", color: "white" }}>
          <h2>포스트가 없습니다.</h2>
          <p>여기에 내용을 추가해보세요 !</p>
        </div>
      )}
    </>
  );
}
export default PostList;
