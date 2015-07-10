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

if (country_code == "CN") {
    $('head').append('<link href="http://fonts.useso.com/css?family=Fira+Sans" rel="stylesheet" type="text/css">');
} else {
    $('head').append('<link href="http://fonts.googleapis.com/css?family=Fira+Sans" rel="stylesheet" type="text/css">');
}

$(".logo").css({"background-image": "url(" + getBrandUrl("logo.svg") + ")"});

enquire.register("(min-width: 768px)", function() {
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
