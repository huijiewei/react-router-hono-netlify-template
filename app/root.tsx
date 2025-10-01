import type { PropsWithChildren } from "react";
import { Links, type LinksFunction, Meta, Outlet, Scripts, ScrollRestoration } from "react-router";

import styles from "~/root.css?url";

export const links: LinksFunction = () => {
  return [
    {
      rel: "stylesheet",
      href: styles,
      precedence: "high",
    },
  ];
};

export const Layout = ({ children }: PropsWithChildren) => {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        {children}
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
};

export default function Root() {
  return <Outlet />;
}

export const HydrateFallback = () => <p className={"p-20 text-center"}>正在加载</p>;
