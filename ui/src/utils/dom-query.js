// =============================================================================
// Fake jQuery
// =============================================================================

// Select a single selector
export const $ = (selector) => {
  return document.querySelector(selector);
};

// Select all the selectors
export const $$ = (selector) => {
  return document.querySelectorAll(selector);
};

// Check if the text passed is present in the url.
export function textInUrl(text) {
  if(window.location.href.indexOf(text) > -1) {
    return true;
  }
  return false;
}

/**
 * this function is updated version of textInUrl (exact path matching added) but since
 * textInUrl has been used on many places(and working fine) so meantime its
 * better to keep textInUrl untouched
 * @param  {[string]} text [path name to be match]
 * @return {[boolean]}
 */
export function matchPathTextWithUrl(text) {
  let urlSegments = window.location.pathname.split('/');

  if(urlSegments.length && urlSegments.indexOf(text) > -1) {
    return true;
  } else if(!urlSegments.length && !text) {
    return true;
  }

  return false;
}

/**
 * function to allow swipe/scroll for mobile devices
 * @param  {String}   [selector='body'] [selector of the element on which we wish bind this event]
 * @param  {Function} cb                [call back function to be called once movement happend]
 */
export function onSwipe(selector = 'body', cb) {

  // initialize coordinates
  let startX = null;
  let startY = null;
  let endX = null;
  let endY = null;

  // get DOM element
  const $element = document.querySelector(selector);

  // touchstart event - start point of swipe
  $element.addEventListener('touchstart', (e) => {

    // get the co-ordinates
    const touchStartCords = e.touches[0] || e.changedTouches[0];
    startX = touchStartCords.pageX;
    startY = touchStartCords.pageY;
  });

  // touchmove event - as soon as user starting with swipe
  $element.addEventListener('touchmove', (e) => {

    // get the co-ordinates
    const touchEndCords = e.touches[0] || e.changedTouches[0];
    endX = touchEndCords.pageX;
    endY = touchEndCords.pageY;

    // movement just happend time to call call-back function
    cb(startX - endX, startY - endY, e);

    // now this is our new touch start points
    startX = endX;
    startY = endY;
  });

  // touchmove event - end point of swipe
  $element.addEventListener('touchend', (e) => {

    // get the co-ordinates
    const touchEndCords = e.touches[0] || e.changedTouches[0];
    endX = touchEndCords.pageX;
    endY = touchEndCords.pageY;

    // whatever movement happend pass it to call-back function
    cb(startX - endX, startY - endY, e);
  });
}

export function onTap(selector, cb, tapRadius = 15) {
  // initialize coordinates
  let startX = null;
  let startY = null;
  let endX = null;
  let endY = null;
  let hScrollAmount = 0;
  let vScrollAmount = 0;


  // get DOM element
  const $element = document.querySelector(selector);

  // touchstart event - start point of swipe
  $element.addEventListener('touchstart', (e) => {

    // get the co-ordinates
    const touchStartCords = e.touches[0] || e.changedTouches[0];
    startX = touchStartCords.pageX;
    startY = touchStartCords.pageY;
  });

  // touchmove event - end point of swipe
  $element.addEventListener('touchend', (e) => {

    // get the co-ordinates
    const touchEndCords = e.touches[0] || e.changedTouches[0];
    endX = touchEndCords.pageX;
    endY = touchEndCords.pageY;

    hScrollAmount = startX - endX;
    vScrollAmount = startY - endY;

    // whatever movement happend pass it to call-back function
    hScrollAmount = hScrollAmount < 0 ? hScrollAmount * -1 : hScrollAmount;
    vScrollAmount = vScrollAmount < 0 ? vScrollAmount * -1 : vScrollAmount;

    if(hScrollAmount <= tapRadius && vScrollAmount <= tapRadius) {
      cb(e);
    }
  });
}

// Check if the child of the parent.
export function isDescendant(parent, child) {
  var node = child.parentNode;
  while (node !== null) {
    if (node === parent) {
      return true;
    }
    node = node.parentNode;
  }
  return false;
}

export function addEvent(object, type, callback) {
    if (object === null || typeof object === 'undefined') {
      return;
    }

    if (object.addEventListener) {
        object.addEventListener(type, callback, false);
    } else if (object.attachEvent) {
        object.attachEvent("on" + type, callback);
    } else {
        object["on"+type] = callback;
    }
}

export function viewportWidth() {
  return Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
}

export function viewportHeight() {
  return Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
}

// Rough implementation. Untested.
export function timeout(ms, promise) {
  return new Promise(function(resolve, reject) {

    promise.then(resolve, reject);
  });
}
