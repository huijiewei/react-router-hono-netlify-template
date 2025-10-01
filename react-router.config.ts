import type { Config } from "@react-router/dev/config";
import { netlifyPreset } from "@resolid/react-router-hono/netlify-preset";
import { nodePreset } from "@resolid/react-router-hono/node-preset";
import { env } from "node:process";

export default {
  ssr: true,
  presets: [
    env.NETLIFY == "1"
      ? netlifyPreset({
          entryFile: "server.netlify.ts",
          nodeVersion: 22,
        })
      : nodePreset({
          entryFile: "server.node.ts",
          nodeVersion: 22,
        }),
  ],
  future: {
    unstable_optimizeDeps: true,
    unstable_splitRouteModules: true,
    unstable_viteEnvironmentApi: true,
  },
} satisfies Config;
