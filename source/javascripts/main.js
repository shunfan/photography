/**
 * Initialize brand images and background images
 */

function getBrandUrl(filename) {
    if (country_code == "CN") {
        return "http://7xk4al.com1.z0.glb.clouddn.com/brand-" + filename;
    } else {
        return "https://s3-us-west-1.amazonaws.com/perry-asia/brand/" + filename;
    }
}

function getSpotlightUrl(filename) {
    if (country_code == "CN") {
        return "http://7xk4al.com1.z0.glb.clouddn.com/spotlight-" + filename;
    } else {
        return "https://s3-us-west-1.amazonaws.com/perry-asia/spotlight/" + filename;
    }
}

$(".logo").css({"background-image": "url(" + getBrandUrl("logo.svg") + ")"});

enquire.register("(min-width: 767px)", function() {
    console.log("(min-width: 767px)");
    $(".spotlight-kilimanjaro").css({"background-image": "url(" + getSpotlightUrl("kilimanjaro.jpg") + ")"});
    $(".spotlight-ebc").css({"background-image": "url(" + getSpotlightUrl("ebc.jpg") + ")"});
    $(".spotlight-nepal").css({"background-image": "url(" + getSpotlightUrl("nepal.jpg") + ")"});
    $(".spotlight-tibet").css({"background-image": "url(" + getSpotlightUrl("tibet.jpg") + ")"});
});

enquire.register("(max-width: 767px)", function() {
    console.log("(max-width: 767px)");
    $(".spotlight-kilimanjaro").css({"background-image": "url(" + getSpotlightUrl("kilimanjaro-mobile.jpg") + ")"});
    $(".spotlight-ebc").css({"background-image": "url(" + getSpotlightUrl("ebc-mobile.jpg") + ")"});
    $(".spotlight-nepal").css({"background-image": "url(" + getSpotlightUrl("nepal-mobile.jpg") + ")"});
    $(".spotlight-tibet").css({"background-image": "url(" + getSpotlightUrl("tibet-mobile.jpg") + ")"});
});

enquire.register("(max-width: 767px) and (-webkit-min-device-pixel-ratio: 2)", function() {
    console.log("(max-width: 767px) and (-webkit-min-device-pixel-ratio: 2)");
    $(".spotlight-kilimanjaro").css({"background-image": "url(" + getSpotlightUrl("kilimanjaro-mobile@2x.jpg") + ")"});
    $(".spotlight-ebc").css({"background-image": "url(" + getSpotlightUrl("ebc-mobile@2x.jpg") + ")"});
    $(".spotlight-nepal").css({"background-image": "url(" + getSpotlightUrl("nepal-mobile@2x.jpg") + ")"});
    $(".spotlight-tibet").css({"background-image": "url(" + getSpotlightUrl("tibet-mobile@2x.jpg") + ")"});
});
