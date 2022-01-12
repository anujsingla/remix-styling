import { LinksFunction } from "remix";
import aboutStyle from "../styles/about.css";

export const links: LinksFunction = () => {
  return [
    {
      rel: "stylesheet",
      href: aboutStyle,
    },
  ];
};

export default function About() {
  return <div>About component</div>;
}
