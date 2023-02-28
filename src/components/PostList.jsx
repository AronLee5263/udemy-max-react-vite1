import Post from "./Post";
import NewPost from "./NewPost";
import classes from "./PostList.module.css";

function PostList() {
  return (
    <>
      <NewPost />
      <ul className={classes.posts}>
        <Post author="Maximiaan" body="the first props exercise!" />
        <Post author="Manel" body="the second props pratice!" />
      </ul>
    </>
  );
}

export default PostList;
