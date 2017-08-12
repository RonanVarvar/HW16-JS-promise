$(window).load(function(){
    var loadLine =  document.querySelector('.loadLine');

    loadLine.addEventListener('animationend', startHide);
});

function startHide() {
    var deffered = $.Deferred();

    deffered.resolve();
    deffered.reject();

    deffered
        .then(firstHide)
        .then(secondHide)
        .then(thirdHide)
        .fail(failHandler);
}
var failHandler = function() {
    console.log('Error!')
};

var firstHide = function() {
   return $('article img').hide(3000);
};

var secondHide = function() {
    return $('article p').hide(2000);
};

var thirdHide = function() {
    return $('article').hide(2000);
};