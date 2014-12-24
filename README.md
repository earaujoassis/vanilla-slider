# Vanilla Slider

> A plain and simple vanilla JavaScript slider.

## Usage

0. Install it from Bower

   ```sh
   $ bower install vanilla-slider
   ```

1. Create a container for the slider:

	```html
	<div id="vs-container"> <!-- Put your elements here --> </div>
	```

2. Include Vanilla Slider's code:

	```html
	<script src="[bower_components/]dist/vanilla-slider.min.js"></script>
	```

3. Call the plugin:

	```javascript
	vs.set({
		containerId: 'vs-container' /* string: id for the container element; default: 'vs-container' */,
		iterable '.images' /* string: iterable elements to be visible/hidden; default: 'img' */,
		timeInterval: 4000 /* integer: interval between each element, in milliseconds; default: 4000 */,
		before: function (element) { } /* function: provides the current element right before it changes the status */,
		after: function (element) { } /* function: provides the current element right after it changes the status */,
	});
	```

4. Proper styles should be given; see demo for an example.

And then you're set.

## License 

[MIT License](http://earaujoassis.mit-license.org/) &copy; Ewerton Assis
