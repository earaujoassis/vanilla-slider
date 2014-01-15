# Vanilla Slider

> A plain and simple vanilla JavaScript slider (images only).

## Usage

1. Create a container for the slider:

	```html
	<div id="vs-container"> <!-- Put your images here --> </div>
	```

2. Include Vanilla Slider's code:

	```html
	<script src="src/vanilla-slider.min.js"></script>
	```

3. Call the plugin:

	```javascript
	vs.set({
		containerId: <string: id for container element (containing imgs tags); default: 'vs-container'>,
		timeInterval: <integer: interval between each image, in milliseconds; default: 4000>
	});
	```

4. Proper styles should be given; see demo for an example.

And then you're set.

## License 

[MIT License](http://ewerton-araujo.mit-license.org/) &copy; Ewerton Assis
