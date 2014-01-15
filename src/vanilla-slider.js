(function( w, d ) {
    function VanillaSlider () {
        this.timeInterval = 4000;
        this.containerId = 'vs-container';
        this.domReady = false;
        this.readySet;
        this.intervalElement;
    }

    VanillaSlider.prototype.set = function ( customOptions ) {
        var options = {}
          , self = this;

        if ( typeof customOptions !== 'object' ) {
            customOptions = {};
        }

        options.timeInterval = customOptions.timeInterval || self.timeInterval;
        options.containerId = customOptions.containerId || self.containerId;

        if ( !self.domReady ) {
            self.readySet = function () { self.set ( options ) };
            return;
        }
        if ( self.intervalElement ) {
            clearInterval( self.intervalElement );
        }

        var sliderContainer = d.getElementById( options.containerId );
        var sliderImages = sliderContainer.getElementsByTagName('img');
        if ( !!sliderImages.length ) {
            var currentImage = 0;
            var resetImage = function( setToImage ) {
                var i, max;
                if ((sliderImages.length - 1) < setToImage || setToImage < 0)
                    return;
                for (i = 0, max = sliderImages.length; i < max; i += 1) {
                    if (i === setToImage)
                        continue;
                    sliderImages[i].style.display = "none";
                }
                sliderImages[ setToImage ].style.display = "block";
            };
            self.intervalElement = setInterval(function() {
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
        if ( this.readySet ) {
            this.readySet();
        }
    }

    w.vs = new VanillaSlider();

    if (d.addEventListener) {
        d.addEventListener("DOMContentLoaded", function () {
            d.removeEventListener("DOMContentLoaded", arguments.callee, false);
            w.vs.domIsReady();
        }, false);
    } else if (d.attachEvent) {
        d.attachEvent("onreadystatechange", function () {
            if (d.readyState === "complete") {
                d.detachEvent("onreadystatechange", arguments.callee);
                w.vs.domIsReady();
            }
        });
    }
})( window, document );
