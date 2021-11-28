import { Link, useLoaderData } from "remix";
import { getPosts } from "~/post";

export const loader = () => {
  return getPosts();
};

export default function Posts() {
  let posts = useLoaderData();

  return (
    <div>
      <h1>Posts</h1>
      {posts.map((post) => (
        <li key={post.slug}>
          <Link to={post.slug}>{post.title}</Link>
        </li>
      ))}
    </div>
  );
}
