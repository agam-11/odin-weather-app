# base-template

`npm run start`
for the start script, which runs `webpack-dev-server`, using `webpack.dev.js`

`npm run build`
for the build script, which runs webpack to create a production build, using `webpack.prod.js`

## Loading Images

- `css-loader` for loading Image files used in our CSS inside url().

- `html-loader` for loading image files we reference in our HTML template, e.g. as the src of an `<img>`.

- `asset/resource` rule in `module.rules` array within `webpack.common.js` to load Images we use in our JavaScript, where we will need to import the files
  > whatever JavaScript module we want to use that image in, we just have to default import it.
  > e.g.
  >
  > ```JS
  > import odinImage from "./odin.png";
  > const image = document.createElement("img");
  > image.src = odinImage;
  > document.body.appendChild(image);
  > ```

## Loading CSS

You can import your CSS file into one of your JavaScript files. `src/index.js` makes sense. We don’t need anything from the imported CSS file itself. Since our CSS and style loaders will handle all of that for us, we can just use a side effect import.
e.g.

```JS
import "./styles.css";
import { greeting } from "./greeting.js";

console.log(greeting);

```
