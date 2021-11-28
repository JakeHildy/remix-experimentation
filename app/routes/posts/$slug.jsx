import { useLoaderData } from "remix";
import { getPost } from "~/post";
import invariant from "tiny-invariant";
import { Message, Heading, Button, Text, Tag } from "@commerce7/admin-ui";

export const loader = async ({ params }) => {
  invariant(params.slug, "expected params.slug");
  return getPost(params.slug);
};

export default function PostSlug() {
  const post = useLoaderData();
  console.log(post);
  return (
    <div>
      <Heading level={1}>{post.title}</Heading>
      <Text>{post.body}</Text>
    </div>
  );
}
