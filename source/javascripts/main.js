var tibet = document.getElementById('tibet-gallery');

if (tibet != undefined) {
  $('#tibet-gallery').hide();

  // Tibet Handler
  var tibet_vertical_images = [1, 2, 5, 6, 9, 10, 11, 16, 46, 50, 51, 54, 57];
  for(var i = 1; i < 70; i++) {
    if(tibet_vertical_images.indexOf(i) >= 0) {
      tibet.insertAdjacentHTML('beforeend', '<figure class="item size23" itemprop="associatedMedia"' +
          'itemscope itemtype="http://schema.org/ImageObject">' +
          '<a href="https://s3-us-west-1.amazonaws.com/perry-asia/tibet/image' + i +
          '.jpg" itemprop="contentUrl" data-size="720x1080">' +
          '<img src="https://s3-us-west-1.amazonaws.com/perry-asia/tibet/thumbnail' + i +
          '.jpg" itemprop="thumbnail" /></a></figure></div>')
    } else {
      tibet.insertAdjacentHTML('beforeend', '<figure class="item size32" itemprop="associatedMedia"' +
          'itemscope itemtype="http://schema.org/ImageObject">' +
          '<a href="https://s3-us-west-1.amazonaws.com/perry-asia/tibet/image' + i +
          '.jpg" itemprop="contentUrl" data-size="1620x1080">' +
          '<img src="https://s3-us-west-1.amazonaws.com/perry-asia/tibet/thumbnail' + i +
          '.jpg" itemprop="thumbnail" /></a></figure>')
    }
  }

  $('.loading').html("Loading...");

  // After all the images are loaded
  $(window).load(function(){
    // Remove the loading bar
    $('.loading').remove();

    // Show the gallery now
    $('#tibet-gallery').show();

    var tibet_container = document.querySelector('#tibet-gallery');

    var pckry = new Packery(tibet_container, {
      // options
      itemSelector: '.item',
    });
  });
}

var nepal = document.getElementById('nepal-gallery');

if (nepal != undefined) {
  // Hide the gallery first
  $('#nepal-gallery').hide();

  // Nepal Handler
  var nepal_vertical_images = [3, 5, 10, 11, 15, 26, 35, 43, 44, 46, 48, 50, 52, 55, 56, 59, 61, 69, 74]
  for(var i = 1; i < 89; i++) {
    if(nepal_vertical_images.indexOf(i) >= 0) {
      nepal.insertAdjacentHTML('beforeend', '<figure class="item size23" itemprop="associatedMedia"' +
          'itemscope itemtype="http://schema.org/ImageObject">' +
          '<a href="https://s3-us-west-1.amazonaws.com/perry-asia/nepal/image' + i +
          '.jpg" itemprop="contentUrl" data-size="720x1080">' +
          '<img src="https://s3-us-west-1.amazonaws.com/perry-asia/nepal/thumbnail' + i +
          '.jpg" itemprop="thumbnail" /></a></figure></div>')
    } else {
      nepal.insertAdjacentHTML('beforeend', '<figure class="item size32" itemprop="associatedMedia"' +
          'itemscope itemtype="http://schema.org/ImageObject">' +
          '<a href="https://s3-us-west-1.amazonaws.com/perry-asia/nepal/image' + i +
          '.jpg" itemprop="contentUrl" data-size="1620x1080">' +
          '<img src="https://s3-us-west-1.amazonaws.com/perry-asia/nepal/thumbnail' + i +
          '.jpg" itemprop="thumbnail" /></a></figure>')
    }
  }

  $('.loading').html("Loading...");

  // After all the images are loaded
  $(window).load(function(){
    // Remove the loading bar
    $('.loading').remove();

    // Show the gallery now
    $('#nepal-gallery').show();

    var nepal_container = document.querySelector('#nepal-gallery');

    var pckry = new Packery(nepal_container, {
      // options
      itemSelector: '.item',
    });
  });
}

var ebc = document.getElementById('ebc-gallery');

if (ebc != undefined) {
  // Hide the gallery first
  $('#ebc-gallery').hide();

  // EBC Handler
  var ebc_vertical_images = [8, 10, 19, 23, 27, 35, 53, 56];
  for(var i = 1; i < 72; i++) {
    if(ebc_vertical_images.indexOf(i) >= 0) {
      ebc.insertAdjacentHTML('beforeend', '<figure class="item size23" itemprop="associatedMedia"' +
          'itemscope itemtype="http://schema.org/ImageObject">' +
          '<a href="https://s3-us-west-1.amazonaws.com/perry-asia/ebc/image' + i +
          '.jpg" itemprop="contentUrl" data-size="720x1080">' +
          '<img src="https://s3-us-west-1.amazonaws.com/perry-asia/ebc/thumbnail' + i +
          '.jpg" itemprop="thumbnail" /></a></figure></div>')
    } else {
      ebc.insertAdjacentHTML('beforeend', '<figure class="item size32" itemprop="associatedMedia"' +
          'itemscope itemtype="http://schema.org/ImageObject">' +
          '<a href="https://s3-us-west-1.amazonaws.com/perry-asia/ebc/image' + i +
          '.jpg" itemprop="contentUrl" data-size="1620x1080">' +
          '<img src="https://s3-us-west-1.amazonaws.com/perry-asia/ebc/thumbnail' + i +
          '.jpg" itemprop="thumbnail" /></a></figure>')
    }
  }

  $('.loading').html("Loading...");

  // After all the images are loaded
  $(window).load(function(){
    // Remove the loading bar
    $('.loading').remove();

    // Show the gallery now
    $('#ebc-gallery').show();

    var ebc_container = document.querySelector('#ebc-gallery');

    var pckry = new Packery(ebc_container, {
      // options
      itemSelector: '.item',
    });
  });
}

var initPhotoSwipeFromDOM = function(gallerySelector) {

  // parse slide data (url, title, size ...) from DOM elements
  // (children of gallerySelector)
  var parseThumbnailElements = function(el) {
    var thumbElements = el.childNodes,
      numNodes = thumbElements.length,
      items = [],
      figureEl,
      childElements,
      linkEl,
      size,
      item;

    for(var i = 0; i < numNodes; i++) {


      figureEl = thumbElements[i]; // <figure> element

      // include only element nodes
      if(figureEl.nodeType !== 1) {
        continue;
      }

      linkEl = figureEl.children[0]; // <a> element

      size = linkEl.getAttribute('data-size').split('x');

      // create slide object
      item = {
        src: linkEl.getAttribute('href'),
        w: parseInt(size[0], 10),
        h: parseInt(size[1], 10)
      };



      if(figureEl.children.length > 1) {
        // <figcaption> content
        item.title = figureEl.children[1].innerHTML;
      }

      if(linkEl.children.length > 0) {
        // <img> thumbnail element, retrieving thumbnail url
        item.msrc = linkEl.children[0].getAttribute('src');
      }

      item.el = figureEl; // save link to element for getThumbBoundsFn
      items.push(item);
    }

    return items;
  };

  // find nearest parent element
  var closest = function closest(el, fn) {
    return el && ( fn(el) ? el : closest(el.parentNode, fn) );
  };

  // triggers when user clicks on thumbnail
  var onThumbnailsClick = function(e) {
    e = e || window.event;
    e.preventDefault ? e.preventDefault() : e.returnValue = false;

    var eTarget = e.target || e.srcElement;

    var clickedListItem = closest(eTarget, function(el) {
      return (el.tagName && el.tagName.toUpperCase() === 'FIGURE');
    });

    if(!clickedListItem) {
      return;
    }


    // find index of clicked item
    var clickedGallery = clickedListItem.parentNode,
      childNodes = clickedListItem.parentNode.childNodes,
      numChildNodes = childNodes.length,
      nodeIndex = 0,
      index;

    for (var i = 0; i < numChildNodes; i++) {
      if(childNodes[i].nodeType !== 1) {
        continue;
      }

      if(childNodes[i] === clickedListItem) {
        index = nodeIndex;
        break;
      }
      nodeIndex++;
    }



    if(index >= 0) {
      openPhotoSwipe( index, clickedGallery );
    }
    return false;
  };

  // parse picture index and gallery index from URL (#&pid=1&gid=2)
  var photoswipeParseHash = function() {
    var hash = window.location.hash.substring(1),
      params = {};

    if(hash.length < 5) {
      return params;
    }

    var vars = hash.split('&');
    for (var i = 0; i < vars.length; i++) {
      if(!vars[i]) {
        continue;
      }
      var pair = vars[i].split('=');
      if(pair.length < 2) {
        continue;
      }
      params[pair[0]] = pair[1];
    }

    if(params.gid) {
      params.gid = parseInt(params.gid, 10);
    }

    if(!params.hasOwnProperty('pid')) {
      return params;
    }
    params.pid = parseInt(params.pid, 10);
    return params;
  };

  var openPhotoSwipe = function(index, galleryElement, disableAnimation) {
    var pswpElement = document.querySelectorAll('.pswp')[0],
      gallery,
      options,
      items;

    items = parseThumbnailElements(galleryElement);

    // define options (if needed)
    options = {
      index: index,

      // define gallery index (for URL)
      galleryUID: galleryElement.getAttribute('data-pswp-uid'),

      getThumbBoundsFn: function(index) {
        // See Options -> getThumbBoundsFn section of docs for more info
        var thumbnail = items[index].el.getElementsByTagName('img')[0], // find thumbnail
          pageYScroll = window.pageYOffset || document.documentElement.scrollTop,
          rect = thumbnail.getBoundingClientRect();

        return {x:rect.left, y:rect.top + pageYScroll, w:rect.width};
      },

      // history & focus options are disabled on CodePen
      // remove these lines in real life:
      history: false,
      focus: false

      //,
      //  showHideOpacity:true

    };

    if(disableAnimation) {
      options.showAnimationDuration = 0;
    }

    // Pass data to PhotoSwipe and initialize it
    gallery = new PhotoSwipe( pswpElement, PhotoSwipeUI_Default, items, options);
    gallery.init();
  };

  // loop through all gallery elements and bind events
  var galleryElements = document.querySelectorAll( gallerySelector );

  for(var i = 0, l = galleryElements.length; i < l; i++) {
    galleryElements[i].setAttribute('data-pswp-uid', i+1);
    galleryElements[i].onclick = onThumbnailsClick;
  }

  // Parse URL and open gallery if it contains #&pid=3&gid=1
  var hashData = photoswipeParseHash();
  if(hashData.pid > 0 && hashData.gid > 0) {
    openPhotoSwipe( hashData.pid - 1 ,  galleryElements[ hashData.gid - 1 ], true );
  }
};

// execute above function
initPhotoSwipeFromDOM('.gallery');
