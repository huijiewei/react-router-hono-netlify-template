# Welcome to React Router + Hono + Vite + Netlify!

```shell
npx create-react-router@latest --template https://github.com/huijiewei/react-router-hono-netlify-template
```

or

[![Deploy with Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository==https%3A%2F%2Fgithub.com%2Fhuijiewei%2Freact-router-hono-netlify-template)

---

Document: [netlify-serve](https://github.com/huijiewei/resolid-react-router-hono?tab=readme-ov-file#netlify-serve)

---

📖 See the [React Router docs](https://reactrouter.com/home) for details on supported features.

## Development

Run the dev server:

```shellscript
npm run dev
```

## Node Deployment

First, build your app for production:

```sh
npm run build:node
```

Then run the app in production mode at local:

```sh
npm start
```

Now you'll need to pick a host to deploy it to.

### DIY

If you're familiar with deploying Node applications, the built-in React Router app server is production-ready.

Make sure to deploy the output of `npm run build`

- `build/server`
- `build/client`
