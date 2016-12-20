// Function to show children
function showChildren(id) {
    //get the jquery object, the menu item
    var navObj = $("[id='hidden_" + id + "']");
    var toggleMenuObj = $("[id='"+id + "_butt']");
    
    // Toggle, show or hide the menu item
    navObj.toggle();
    toggleMenuObj.toggleClass("fa-plus-square").toggleClass("fa-minus-square");
    
    // Set cookie
    var _cookie = (typeof $.cookie('docToggle') === 'undefined')?[]:JSON.parse($.cookie('docToggle'));
    
    // Check if div is now closed
    var _visible = navObj.is(':visible');
    
    // if div is show we add value to cookie
    if (_visible) {
        // Make sure the value is not already in the array. this also pushed the value to the array, and change the nev element to minus
        _addToSet(_cookie, id);
        toggleMenuObj.removeClass("fa-plus-square").addClass("fa-minus-square");
    }
    // remove value from cookie if it is closed, and change the nav element to plus
    else {
        _removeFromSet(_cookie, id);
        toggleMenuObj.removeClass("fa-minus-square").addClass("fa-plus-square");
    }
    
    // Set cookie in the browser
    $.cookie('docToggle', JSON.stringify(_cookie), { expires: 7, path: '/' });
    // Return
    return false;
}

var _addToSet = function(the_array, the_element, comparison_func) {
    var has_match  = _findOne(the_array, function (the_item) {
        return typeof comparison_func === 'function' ? comparison_func(the_element, the_item) : the_element == the_item;
    });
    return has_match ? false : true && the_array.push(the_element);
};

var _removeFromSet = function(the_array, the_element, comparison_func) {
    var index = -1;
    for (var i = 0; i < the_array.length; i++) {
        // if we've found our match from the comparison function or a direction comparison note the index and break out of the for loop
        if (typeof comparison_func === 'function' && comparison_func(the_element, the_item) || the_element == the_array[i]) {
            index = i;
            break;
        }
    }
    return index < 0 ? false : true && the_array.splice(index, 1);
};

//// example use:
// var id = 56;
// var field = findOne(lots_of_ids, function(elem) {
//     return elem === id;
// });
function _findOne(array, callback, context) {

    // if we're not given a proper array then return null for no match
    if (! array || ! Array.isArray(array)) { return null; }
    
    var element;
    // Added typeof because if there is no value found in DB it throws unrecoverable exeption
    if (typeof array.length !== 'undefined') {
        for (var i = 0; i < array.length; i++) {
            element = array[i];
            if (callback.call(context, element, i, array)) {
                return element;
            }
        }
    }
    return null; // no match
}
