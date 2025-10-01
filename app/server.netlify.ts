import { createHonoNetlifyServer, type NetlifyContext } from "@resolid/react-router-hono/netlify-server";

export default await createHonoNetlifyServer<{
  Bindings: {
    context: NetlifyContext;
  };
}>({
  getLoadContext: (c) => {
    return {
      remoteAddress: c.env.context.ip,
      requestOrigin: c.env.context.site.url,
    };
  },
});
