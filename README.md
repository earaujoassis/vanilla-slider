# Vanilla Slider

> A plain and simple vanilla JavaScript slider.

This project was created as a technical test for a selection process. **It is not maintained anymore**.

## Usage

Install it from Bower

```sh
$ bower install vanilla-slider
```

Create a container for the slider:

```html
<div id="my-container">
  <!-- Put your elements here -->
</div>
```

Include Vanilla Slider's code:

```html
<script src="[bower_components]/vanilla-slider/dist/vanilla-slider.min.js"></script>
```

Call the plugin:

```javascript
VanillaSlider.set({
    /*
     * string: ElementId for the container element; default: 'vs-container'
     */
    containerId: 'my-container',

    /*
     * string: iterable elements to be visible/hidden; default: 'img' tags
     */
    iterable '.images',

    /*
     * integer: interval between each element, in milliseconds; default: 4000
     */
    timeInterval: 3000,

    /*
     * function: a function to be executed before the slider is changed
     */
    before: function (element) { },

    /*
     * function: a function to be executed after the slider is changed
     */
    after: function (element) { },
});
```

Proper styles should be given; see the project website for an example.

And then you're set.

## License

[MIT License](http://earaujoassis.mit-license.org/) &copy; Ewerton Assis
