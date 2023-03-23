import { Outlet } from "react-router-dom";
import PostList from "../components/PostList";

function Posts() {
  return (
    <>
      <Outlet />
      <main>
        <PostList />
      </main>
    </>
  );
}

export default Posts;

export async function loader() {
  console.log("로더 함수가 호출 되면 밑에 객체 로그찍힐겁니다");
  const response = await fetch("http://localhost:8080/posts");
  const resData = await response.json();
  console.log(resData);
  return resData.Posts;
}
