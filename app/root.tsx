import {
  Links,
  LinksFunction,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "remix";
import type { MetaFunction } from "remix";
import globalStyle from "~/styles/global.css";
import mainStyle from "~/styles/css/main.css";
import largeStyles from "~/styles/large.css";
import xlStyles from "~/styles/extralarge.css";

export const meta: MetaFunction = () => {
  return { title: "New Remix App" };
};

export const links: LinksFunction = () => {
  return [
    {
      rel: "stylesheet",
      href: "https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css",
    },
    {
      rel: "stylesheet",
      href: globalStyle,
    },
    {
      rel: "stylesheet",
      href: largeStyles,
      media: "(min-width: 1024px)",
    },
    {
      rel: "stylesheet",
      href: xlStyles,
      media: "(min-width: 1280px)",
    },
    {
      rel: "stylesheet",
      href: mainStyle,
    },
  ];
};

export default function App() {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        <Outlet />
        <ScrollRestoration />
        <Scripts />
        {process.env.NODE_ENV === "development" && <LiveReload />}
      </body>
    </html>
  );
}

/*

Key points:

- Primary way to style in Remix and the web is to add a link with
 rel="stylesheet" `link rel="stylesheet"`

- Remix created `Links` component which helps to render the `link` tags
for the current routes.

- When the route is active, the stylesheet is added to the page.

- When the route is no longer active, the stylesheet is removed.

- Each nested route's links are merged (parents first) and rendered as 
`link` tags by the `Links` you rendered in app/root.js in the head of 
the document.

Root, home, about,  Post -> postId

Root, home style (Home route)
Root, about style (About route)
Root, post style (Post route)
Root, post, postId style (Post Id route)

A different way to add styles to the app:

- Route styles
- Use SCSS/SASS stylesheets
- Remote Stylesheets (Bootstrap or third party styles)
- Shared component styles
- Link media queries (Mobile, computer, tablet)
- Tailwind
- PostCSS
- CSS-in-JS libraries

*/
