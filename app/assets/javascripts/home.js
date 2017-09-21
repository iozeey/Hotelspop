$( document ).ready(function() {
   $("#room_dropdown").click(function(e){
        $(".search-dropdown").show();
        e.stopPropagation();
    });

   $("#passengers_dropdown").click(function(e){
        $(".search-dropdown").show();
        e.stopPropagation();
    });

   // Function for selecting Packages
   $( "select" )
    .change(function() {
    var str = "";
    $( "select option:selected" ).each(function() {
      str += $( this ).text() + " ";
    });
        $( ".select-first-text" ).text( str );
    })
    .trigger( "change" );
    //function ended.
});

$(document).click(function(){
    $(".search-dropdown").hide();
});

function flightFunction() {
    document.getElementById("hotel").style.display = "none";
    document.getElementById("hotel-search-form").style.display = "none";
    document.getElementById("flight").style.display = "block";
    document.getElementById("flightForm").style.display = "block";
    var flight_Tab = document.getElementById("flightTab");
    var hotel_Tab = document.getElementById("hotelTab");
    flight_Tab.className+= " active";
    hotel_Tab.classList.remove('active');
}

function hotelFunction() {
    document.getElementById("flight").style.display = "none";
    document.getElementById("flightForm").style.display = "none"
    document.getElementById("hotel").style.display = "block";
    document.getElementById("hotel-search-form").style.display = "block";
    var flight_Tab = document.getElementById("flightTab");
    var hotel_Tab = document.getElementById("hotelTab");
    hotel_Tab.className+= " active";
    flight_Tab.classList.remove('active');
}

function roundTrip(){
    document.getElementById("inline-search-form-segment-1").style.display = "none";
    // document.getElementById("dp1505772602982").style.display = "block";
    var rTrip = document.getElementById("toggle-roundtrip");
    var mTrip = document.getElementById("toggle-multi");
    var oTrip = document.getElementById("toggle-oneway");
    rTrip.className+= " active";
    oTrip.classList.remove('active');
    mTrip.classList.remove('active');
}

function oneWay(){
    document.getElementById("inline-search-form-segment-1").style.display = "none";
    // document.getElementById("dp1505772602982").style.display = "none";
    var mTrip = document.getElementById("toggle-multi");
    var rTrip = document.getElementById("toggle-roundtrip");
    var oTrip = document.getElementById("toggle-oneway");
    oTrip.className+= " active";
    rTrip.classList.remove('active');
    mTrip.classList.remove('active');
}

function multiTrip(){
    document.getElementById("inline-search-form-segment-1").style.display = "block";
    // document.getElementById("dp1505772602981").style.display = "block";
    var rTrip = document.getElementById("toggle-roundtrip");
    var oTrip = document.getElementById("toggle-oneway");
    var mTrip = document.getElementById("toggle-multi");
    mTrip.className+= " active";
    oTrip.classList.remove('active');
    rTrip.classList.remove('active');
}

// (function() {
//     var el; // All elements used by this module
//     var windowWidthHeaderActions = 767;
//     el = {
//         menuToggle:      document.getElementById('jfly-mobile-menu-toggle'),
//         menuContainer:   document.getElementById('jfly-mobile-menu-container'),
//         menuOverlay:     document.getElementById('jfly-mobile-menu-overlay'),
//         submenuToggles:  document.getElementsByClassName('jfly-submenu-toggle'),
//         submenuElements: document.getElementsByClassName('jfly-submenu-element'),
//         submenuWrappers: document.getElementsByClassName('jfly-submenu-wrapper')
//     };
//     init();
//     /**
//      * Get whether an element has a class.
//      * @param elem
//      * @param presentClass
//      * @param cb Callback to execute if a class is present.
//      * @return {Boolean}
//      */
//     function hasClass(elem, presentClass, cb) {
//         var classes; // Array holding all of this element's classes
//         cb = cb || function(){};
//         classes = elem.className.split(' ');
//         // Ensure class doesn't already exist
//         for (var i = 0; i < classes.length; i++) {
//             if (classes[i] === presentClass) {
//                 cb(elem, classes, i);
//                 return true;
//             }
//         }
//         return false;
//     }
//     /**
//      * Add class to an element.
//      * @param elem
//      * @param newClass
//      */
//     function addClass(elem, newClass) {
//         if (!hasClass(elem, newClass)) {
//             elem.className += ' ' + newClass;
//         }
//     }
//     /**
//      * Remove a class from an element.
//      * @param elem
//      * @param removedClass
//      */
//     function removeClass(elem, removedClass) {
//         hasClass(elem, removedClass,
//             function (elem, classes, i) {
//                 classes.splice(i, 1);
//                 elem.className = classes.join(' ');
//             }
//         );
//     }
//     /**
//      * Show an element.
//      * @param elem
//      */
//     function show(elem) {
//         elem.style['display'] = 'block';
//     }
//     /**
//      * Hide an element.
//      * @param elem
//      */
//     function hide(elem) {
//         elem.style['display'] = 'none';
//     }
//     /**
//      * Check if "elem" is a descendant of "parent"
//      */
//     function isDescendant(elem, parent) {
//         while (elem = elem.parentElement) {
//             if (elem === parent) return true;
//         }
//         return false;
//     }
//     /**
//      * Close the mobile header menu.
//      */
//     function closeHeaderMenu(){
//         removeClass(el.menuToggle, 'active');
//         hide(el.menuOverlay);
//         removeClass(el.menuContainer, 'open');
//         removeClass(document.body, 'fixed');
//     }
//     /**
//      * Bind events for the module.
//      */
//     function bindEvents() {
//         /**
//          * Mobile top-right menu toggle click.
//          */
//         el.menuToggle.addEventListener('click', function (e) {
//             // Open mobile menu
//             if (!hasClass(el.menuToggle, 'active')) {
//                 addClass(el.menuToggle, 'active');
//                 show(el.menuOverlay);
//                 addClass(el.menuContainer, 'open');
//                 addClass(document.body, 'fixed');
//                 return;
//             }
//             // Already open, close it
//             closeHeaderMenu();
//         });
//         /**
//          * All sub-menu toggles click.
//          */
//         for (var i = 0; i < el.submenuToggles.length; i++) {
//             el.submenuToggles[i].addEventListener('click', function(e) {
//                 var button;
//                 var buttonParent;
//                 var childElem;
//                 e.preventDefault();
//                 button = this;
//                 buttonParent = button.parentNode;
//                 childElem = buttonParent.querySelector('.jfly-submenu-element');
//                 // Only applies to larger screens
//                 if ( document.body.clientWidth > windowWidthHeaderActions ) {
//                     for (var i = 0; i < el.submenuToggles.length; i++) {
//                         removeClass(el.submenuToggles[i], 'active');
//                     }
//                     for (i = 0; i < el.submenuElements.length; i++) {
//                         hide(el.submenuElements[i]);
//                     }
//                 }
//                 // Show/hide element
//                 if (!hasClass(buttonParent, 'active')) {
//                     addClass(buttonParent, 'active');
//                     show(childElem);
//                     return;
//                 }
//                 removeClass(buttonParent, 'active');
//                 hide(childElem);
//             });
//         }
//         /**
//          * Close submenu on body clicks.
//          */
//         function handleBodyMouseup(e) {
//             var container;
//             if ( document.body.clientWidth > windowWidthHeaderActions ) {
//                 container = document.querySelector('.jfly-submenu-wrapper.active');
//                 if (container !== e.target && !isDescendant(e.target, container)) {
//                     // Remove 'active' class from all sub-menu wrappers
//                     for (var i = 0; i < el.submenuWrappers.length; i++) {
//                         removeClass(el.submenuWrappers[i], 'active');
//                     }
//                     // Hide all sub-menu elements
//                     for (i = 0; i < el.submenuElements.length; i++) {
//                         hide(el.submenuElements[i]);
//                     }
//                 }
//             }
//         }
//         document.body.addEventListener('mouseup', handleBodyMouseup);
//         document.body.addEventListener('touchstart', handleBodyMouseup);
//         /**
//          * Close header menu when clicking menu overlay.
//          */
//         el.menuOverlay.addEventListener('click', closeHeaderMenu);
//     }
//     /**
//      * Initialize module.
//      */
//     function init() {
//         var bodyClass; // Class to initially add to the body
//         bodyClass = navigator.userAgent.indexOf('Android') !== -1 ? 'is-android' : 'is-not-android';
//         addClass(document.body, bodyClass);
//         bindEvents();
//     }
// })();
