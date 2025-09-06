# CodePan

[![CircleCI](https://circleci.com/gh/onizuka-aniki/codepan/tree/main.svg?style=shield)](https://circleci.com/gh/onizuka-aniki/codepan/tree/main) [![chat](https://img.shields.io/badge/chat-on%20discord-7289DA.svg?style=flat)](https://chat.egoist.moe)

Play with JS/CSS/HTML so simple it hurts, the web playground that works offline.

## Demo

https://onizuka-aniki.github.io/codepan/

## Why

> Aren't there already JSBin/CodePen/JSFiddle?

Yep! So why not one more? And this one could work **offline** for you!

How? `codepan` is just a single page app with **no-backend**! Built with Webpack and Vue.js, and the offline feature is provided by [offline-plugin](https://github.com/NekR/offline-plugin).

## Browser Support

We aim to support latest version of Chrome, Safari, Firefox and Microsoft Edge.

## Development

Clone this repository and install dependencies by running `yarn`, then:

- `yarn dev`: Run in development mode
- `yarn build`: Build in production mode
- `yarn lint`: Run eslint

## Set pans from the url GET parameters

You can use url GET param:

- `pans=html,css,js,console,output`

Sets types of visible open pans, any number is ok

- `layout=column|row`

Sets the desired layout of open pans

- `headless=false|true`

Doesnt show ads, menu or pan header titles

## Credits

- v0.1 &copy; [Egoist](https://github.com/egoist)
- v0.2+ &copy; [Onizuka-Aniki](https://github.com/onizuka-aniki)

## License

MIT
