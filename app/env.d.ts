/// <reference types="vite/client" />

declare namespace NodeJS {
  export interface ProcessEnv {
    readonly RX_PROXY: number;
    readonly RX_PROXY_COUNT: number;
  }
}
