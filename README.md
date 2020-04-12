# boilerplate

Just a sample markdown template.

## HTML

### Standards

Use semantic elements as much as possible. Limit to 2,000 elements, 30 nested depth.

### Architecture

Place the i`ndex.html` in the src project folder along with a `404-error.html` error page.

### Distribution

Copy the src html files into the distribution folder using a task runner (`Gulp` or `Grunt`).

## CSS

### Standards

Element classes shall be used for styling purposes only. Element ids are used for dynamic manipulation using JavaScript. Use `BEM` naming convention or equivalent.

### Architecture

All CSS files shall be placed inside the `src/styles` folder. The folder shall contain all styling "modules" including:

- `Main.css` – contains root styling, will be imported to other files and used for distribution
- `normalize.css` – get latest version of browser normalization from gitHub
- `reset.css` - user created and minimal
- `type.css` – contains all typography elements
- `layout.css` - contains all layout rules and elements - no style!
- `forms.css` – standard form styling
- `table.css`
- `list.css`

### Distribution

Prepare all CSS files for distribution using a task runner (`gulp` or `grunt`). The pipline shall include `concatenation` into the main.css file, an `autoprefixer`, and lastly a `minifier`. The distribution CSS file will then be placed in the `dist/styles` folder.

## JavaScript

### Standards

Element ids (no classes) are used for dynamic manipulation using JavaScript. Use the most current (ES6 or later) notation. Avoid using libraries such as jQuery.

### Architecture

Generally, JS files should be placed in the src/scripts folder. Use `main.js` or `index.js` for core JavaScript and separate other JS files into appropriate modules and import and export as needed. The service worker file, along with the manifest.json files shall be placed in the parent project folder.
A `Gulpfile.js` file will be place in the parent folder along with a package.json file to handle the distribution tasks.

### Distribution

Concatenate then minify any scripts inside the src/scripts folder to `main.js.` Copy all src JS and JSON files into the distribution folder under the same folder directory.

## Assets

### Standards

For images, include alt and lazy loading attribute. Compress file appropriately. For documents and PDFs, keep file size small and avoid loading until user request.

### Architecture

**Images** shall be placed in the `src/images` folder. Icons for the web app manifest can be placed inside the `src/images/icons` folder. Use an online generator for different icon sizing.

**Documents** shall be stored in the docs folder, which can include word documents, text files, and PDFs for the site.

### Distribution

Using a task runner, minify images and copy over all assets in the src folder to the same directory in the distribution folder.

## Resources

- [github](http://www.github.com)
- [MDN](https://developer.mozilla.org/en-US/)
- [W3 school](https://www.w3schools.com/)
- [CSS-Tricks](https://css-tricks.com/)
- [Medium](https://medium.com/)
- [Stack Overflow](https://stackoverflow.com/)
