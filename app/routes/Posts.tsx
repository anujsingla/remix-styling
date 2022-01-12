import axios from "axios";
import { Link, LoaderFunction, useLoaderData, Outlet } from "remix";
import { LinksFunction } from "remix";
import postStyle from "~/styles/posts.css";

export const links: LinksFunction = () => {
  return [
    {
      rel: "stylesheet",
      href: postStyle,
    },
  ];
};

export interface IPost {
  userId: string;
  id: string;
  title: string;
  body: string;
}

export const loader: LoaderFunction = async () => {
  const response = await axios.get(
    "https://jsonplaceholder.typicode.com/posts"
  );
  return response.data;
};

export default function Posts() {
  const post = useLoaderData<IPost[]>();
  return (
    <div>
      Post component
      <ul>
        {post &&
          post?.slice(0, 5).map((p, i) => (
            <li key={p.id}>
              <Link className="linkText" to={`${p.id}`}>
                {p.title}
              </Link>
            </li>
          ))}
      </ul>
      <main>
        <Outlet />
      </main>
    </div>
  );
}
