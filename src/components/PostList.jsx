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
        {posts.map((post) => (
          <Post author={post.author} body={post.body} />
        ))}
      </ul>
    </>
  );
}
export default PostList;
