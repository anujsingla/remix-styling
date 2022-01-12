import { LinksFunction } from "remix";
import homeStyle from "../styles/home.css";

export const links: LinksFunction = () => {
  return [
    {
      rel: "stylesheet",
      href: homeStyle,
    },
  ];
};

export default function Home() {
  return <div>Home component</div>;
}
