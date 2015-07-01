/**
 * Gallery
 */

var kilimanjaro = {
    object: document.getElementById('kilimanjaro-gallery'),
    name: 'kilimanjaro',
    id: "#kilimanjaro-gallery",
    vertical_images: [9, 42],
    number: 45,
};

var ebc = {
    object: document.getElementById('ebc-gallery'),
    name: 'ebc',
    id: "#ebc-gallery",
    vertical_images: [8, 10, 19, 23, 27, 35, 53, 56],
    number: 71,
};

var nepal = {
    object: document.getElementById('nepal-gallery'),
    name: 'nepal',
    id: "#nepal-gallery",
    vertical_images: [3, 5, 10, 11, 15, 26, 35, 43, 44, 46, 48, 50, 52, 55, 56, 59, 61, 69, 74],
    number: 88,
};

var tibet = {
    object: document.getElementById('tibet-gallery'),
    name: 'tibet',
    id: "#tibet-gallery",
    vertical_images: [1, 2, 5, 6, 9, 10, 11, 16, 46, 50, 51, 54, 57],
    number: 69,
};

if (kilimanjaro.object != undefined) {
    loadGallery(kilimanjaro);
}

if (ebc.object != undefined) {
    loadGallery(ebc);
}

if (nepal.object != undefined) {
    loadGallery(nepal);
}

if (tibet.object != undefined) {
    loadGallery(tibet);
}

function loadGallery(gallery) {
    // Hide the gallery at first
    $(gallery.id).hide();

    // Load all images
    for(var i = 1; i < gallery.number + 1; i++) {
        if(gallery.vertical_images.indexOf(i) >= 0) {
            gallery.object.insertAdjacentHTML('beforeend', '<figure class="item size23" itemprop="associatedMedia"' +
                'itemscope itemtype="http://schema.org/ImageObject">' +
                '<a href="https://s3-us-west-1.amazonaws.com/perry-asia/' + gallery.name + '/image' + i +
                '.jpg" itemprop="contentUrl" data-size="720x1080">' +
                '<img src="https://s3-us-west-1.amazonaws.com/perry-asia/' + gallery.name + '/thumbnail' + i +
                '.jpg" itemprop="thumbnail" /></a></figure></div>')
        } else {
            gallery.object.insertAdjacentHTML('beforeend', '<figure class="item size32" itemprop="associatedMedia"' +
                'itemscope itemtype="http://schema.org/ImageObject">' +
                '<a href="https://s3-us-west-1.amazonaws.com/perry-asia/' + gallery.name + '/image' + i +
                '.jpg" itemprop="contentUrl" data-size="1620x1080">' +
                '<img src="https://s3-us-west-1.amazonaws.com/perry-asia/' + gallery.name + '/thumbnail' + i +
                '.jpg" itemprop="thumbnail" /></a></figure>')
        }
    }

    $('.loading').html("Loading...");

    // After all images are loaded
    $(window).load(function(){
        // Remove the loading bar
        $('.loading').remove();

        // Show the gallery now
        $(gallery.id).show();

        var container = document.querySelector(gallery.id);

        var pckry = new Packery(container, {
            // options
            itemSelector: '.item',
        });
    });
}
