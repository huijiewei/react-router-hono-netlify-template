import { reactRouter } from "@react-router/dev/vite";
import { reactRouterHonoServer } from "@resolid/react-router-hono/dev";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig(() => {
  return {
    plugins: [
      reactRouterHonoServer({
        entryFile: "server.node.ts",
      }),
      reactRouter(),
      tailwindcss(),
      tsconfigPaths(),
    ].filter(Boolean),
    environments: {
      ssr: {
        build: {
          target: "node22",
          rollupOptions: {
            output: {
              hoistTransitiveImports: false,
              manualChunks: undefined,
            },
          },
        },
      },
    },
    build: {
      rollupOptions: {
        output: {
          manualChunks: (id) => {
            if (
              id.includes("/node_modules/react/") ||
              id.includes("/node_modules/react-dom/") ||
              id.includes("/node_modules/react-is/") ||
              id.includes("/node_modules/scheduler/")
            ) {
              return "react";
            }

            if (
              id.includes("/node_modules/@react-router/") ||
              id.includes("/node_modules/react-router/") ||
              id.includes("/node_modules/turbo-stream/") ||
              id.includes("react-router/with-props")
            ) {
              return "react-router";
            }
          },
        },
      },
    },
  };
});
