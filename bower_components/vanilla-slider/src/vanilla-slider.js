(function (w, d) {
    "use strict";
    var VanillaSlider = function () {
        this.readySet;
        this.intervalElement;
    };

    VanillaSlider.prototype.timeInterval = 4000;
    VanillaSlider.prototype.containerId = "vs-container";
    VanillaSlider.prototype.startAt = 0;
    VanillaSlider.prototype.domReady = false;

    VanillaSlider.prototype.set = function (customOptions) {
        var options = {},
            self = this,
            sliderContainer,
            sliderImages,
            currentImage,
            resetImage;

        if (typeof customOptions !== "object") {
            customOptions = {};
        }

        options.timeInterval = customOptions.timeInterval || self.timeInterval;
        options.containerId = customOptions.containerId || self.containerId;
        options.startAt = customOptions.startAt || self.startAt;
        options.before = customOptions.before || null;
        options.after = customOptions.after || null;

        if (!self.domReady) {
            self.readySet = function () { self.set(options); };
            return;
        }

        if (self.intervalElement) {
            clearInterval(self.intervalElement);
            self.intervalElement = null;
        }

        sliderContainer = d.getElementById(options.containerId);
        sliderImages = sliderContainer.getElementsByTagName("img");
        if (!!sliderImages.length) {
            currentImage = options.startAt;
            resetImage = function (setToImage) {
                if ((sliderImages.length - 1) < setToImage || setToImage < 0) {
                    return;
                }

                if (!!options.before) {
                    options.before(sliderImages[currentImage]);
                }

                /*jshint -W081 */
                for (var i = 0, max = sliderImages.length; i < max; i += 1) {
                    if (i === setToImage) {
                        continue;
                    }
                    sliderImages[i].style.display = "none";
                }
                /*jshint +W081 */

                sliderImages[setToImage].style.display = "block";
                currentImage = setToImage;

                if (!!options.after) {
                    options.after(sliderImages[currentImage]);
                }
            };
            resetImage(currentImage);
            self.intervalElement = setInterval(function () {
                var nextImage = currentImage + 1 >= sliderImages.length ? 0 : currentImage + 1;
                resetImage(nextImage);
            }, options.timeInterval);
        }
        else {
            console.log("Vanilla-slider: Warning: There are no images to slide.");
        }
    };

    VanillaSlider.prototype.domIsReady = function () {
        this.domReady = true;
        if (this.readySet) {
            this.readySet(); /* GO! */
        }
    };

    w.vs = new VanillaSlider();

    if (d.addEventListener) {
        d.addEventListener("DOMContentLoaded", function evnt() {
            d.removeEventListener("DOMContentLoaded", evnt, false);
            w.vs.domIsReady();
        }, false);
    } else if (d.attachEvent) {
        d.attachEvent("onreadystatechange", function evnt() {
            if (d.readyState === "complete") {
                d.detachEvent("onreadystatechange", evnt);
                w.vs.domIsReady();
            }
        });
    }
})(window, document);
