import axios from "axios";
import { LinksFunction, LoaderFunction, useLoaderData } from "remix";
import postidStyle from "~/styles/postid.css";

export const links: LinksFunction = () => {
  return [
    {
      rel: "stylesheet",
      href: postidStyle,
    },
  ];
};

export const loader: LoaderFunction = async ({ params }) => {
  const response = await axios.get(
    "https://jsonplaceholder.typicode.com/posts"
  );
  return response.data.find((g: any) => g?.id === Number(params.postId));
};

export default function PostId() {
  const data = useLoaderData();
  return (
    <div>
      <div>
        <p>Post by Id</p>
        <p>Id: {data?.id}</p>
        <p>{data?.body}</p>
      </div>
    </div>
  );
}
