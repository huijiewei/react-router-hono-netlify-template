import type { HttpBindings } from "@hono/node-server";
import { createHonoNodeServer } from "@resolid/react-router-hono/node-server";
import type { Context } from "hono";
import { env } from "node:process";
import { getClientIp, getRequestOrigin } from "~/utils/http";

export default await createHonoNodeServer({
  getLoadContext: (c: Context<{ Bindings: HttpBindings }>) => {
    const proxy = env.RX_PROXY == 1;

    return {
      remoteAddress: getClientIp(c.req.raw, c.env.incoming.socket, {
        proxy: proxy,
        proxyCount: env.RX_PROXY_COUNT,
      }),
      requestOrigin: getRequestOrigin(c.req.raw, c.env.incoming.socket, proxy),
    };
  },
});
