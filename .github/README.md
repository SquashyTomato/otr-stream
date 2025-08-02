# o!tr-stream

A Custom osu! Tournament Overlay originally designed for OTR2025.

The overlay is built with React (and Vite) and designed to work with [tosu](https://github.com/tosuapp/tosu).

This was made *very* quickly but it is (mostly) working, the project is open source for anyone who is looking to develop something similar.

---

## Development and Building Guide

To develop and build the Overlay ready for importing into tosu, make sure you have the latest version of Node and Yarn installed.

You can then run the following to start the dev server (you will need tosu open):
```md
yarn -D
yarn dev
```

To build the overlay, simply run the following command and copy the contents of your `dist` folder into tosu as explained in their admin console:
```md
# Only run "yarn -D" if you didn't in the first step
yarn -D
yarn build
```

---

## License

This project is licenced under GNU GPL-3.0, you are free to take and use this for your own project.

All I ask is that you provide me credit for the base work via a link to my Website: [https://tomato.sh](https://tomato.sh).

If you have any questions about this project, please feel free to contact me!


## 