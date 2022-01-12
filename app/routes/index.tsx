import { Nav } from "react-bootstrap";
import { Link, LinksFunction, Outlet } from "remix";
import navStyle from "../styles/css/nav.css";

export const links: LinksFunction = () => {
  return [
    {
      rel: "stylesheet",
      href: navStyle,
    },
  ];
};

export default function Index() {
  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.4" }}>
      <h1>Welcome to Remix</h1>
      <Nav>
        <Nav.Item>
          <Link className="nav-link" to="/home">
            Home
          </Link>
        </Nav.Item>
        <Nav.Item>
          <Link className="nav-link" to="/about">
            About
          </Link>
        </Nav.Item>
        <Nav.Item>
          <Link className="nav-link" to="/posts">
            Posts
          </Link>
        </Nav.Item>
      </Nav>
      <Outlet />
    </div>
  );
}
