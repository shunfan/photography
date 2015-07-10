/**
 * Initialize brand images and background images
 */

function getBrandUrl(filename) {
    if (country_code == "CN") {
        return "https://dn-perry-photography.qbox.me/brand-" + filename;
    } else {
        return "https://s3-us-west-1.amazonaws.com/perry-asia/brand/" + filename;
    }
}

function getSpotlightUrl(filename) {
    if (country_code == "CN") {
        return "https://dn-perry-photography.qbox.me/spotlight-" + filename;
    } else {
        return "https://s3-us-west-1.amazonaws.com/perry-asia/spotlight/" + filename;
    }
}

if (country_code == "CN") {
    $('head').append('<link href="https://dn-perry-photography.qbox.me/brand-apple-touch-icon.png" rel="apple-touch-icon" type="image/png">');
    $('head').append('<link href="https://dn-perry-photography.qbox.me/brand-favicon.png" rel="icon" type="image/png">');
    $('head').append('<link href="https://dn-perry-photography.qbox.me/font-fira-sans.css" rel="stylesheet" type="text/css">');
} else {
    $('head').append('<link href="https://s3-us-west-1.amazonaws.com/perry-asia/brand/apple-touch-icon.png" rel="apple-touch-icon" type="image/png">');
    $('head').append('<link href="https://s3-us-west-1.amazonaws.com/perry-asia/brand/favicon.png" rel="icon" type="image/png">');
    $('head').append('<link href="https://fonts.googleapis.com/css?family=Fira+Sans:400,700" rel="stylesheet" type="text/css">');
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
