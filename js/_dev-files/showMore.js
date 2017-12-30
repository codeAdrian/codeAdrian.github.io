var codeAdrianShowMore = (function($) {
    var $activeElement;
    var toggleContainerClass = ".containerWork__containerToggle";

    var triggerActiveClass = "button--active";
    var containerActiveClass = "containerWork__containerToggle--extended";

    function toggle(activeElement){
        $activeElement = $(activeElement);
        var activeClontainer = $activeElement.closest(toggleContainerClass);

        $activeElement.toggleClass(triggerActiveClass);
        activeClontainer.toggleClass(containerActiveClass);
    }

    return {
        toggle : toggle
    }
})(jQuery);