import Post from "./Post";
import classes from "./PostList.module.css";

function PostList() {
  return (
    <ul className={classes.posts}>
      <Post author="Maximiaan" body="the first props exercise!" />
      <Post author="Manel" body="the second props pratice!" />
    </ul>
  );
}

export default PostList;
