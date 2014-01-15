/*
 *  Vanilla Slider - v0.1.4
 *  A plain and simple vanilla JavaScript slider.
 *  http://earaujoassis.github.io/vanilla-slider/
 *
 *  Copyright (c) 2014 Ewerton Assis <hey@ewerton-araujo.com>
 *  MIT License
 */
(function (w, d) {
    "use strict";
    var VanillaSlider = function () {
        this.timeInterval = 4000;
        this.containerId = "vs-container";
        this.startAt = 0;
        this.domReady = false;
        this.readySet;
        this.intervalElement;
    };

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

        if (!self.domReady) {
            self.readySet = function () { self.set (options); };
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
                var i, max;
                if ((sliderImages.length - 1) < setToImage || setToImage < 0) {
                    return;
                }
                for (i = 0, max = sliderImages.length; i < max; i += 1) {
                    if (i === setToImage) {
                        continue;
                    }
                    sliderImages[i].style.display = "none";
                }
                sliderImages[setToImage].style.display = "block";
            };
            resetImage(currentImage);
            self.intervalElement = setInterval(function () {
                currentImage = currentImage + 1 >= sliderImages.length ? 0 : currentImage + 1;
                resetImage(currentImage);
            }, options.timeInterval);
        }
        else {
            console.log("Vanilla-slider: Warning: There are no images to slide.");
        }
    };

    VanillaSlider.prototype.domIsReady = function() {
        this.domReady = true;
        if (this.readySet) {
            this.readySet();
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
