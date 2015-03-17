
$(document).ready(function () {

    $('.thumbnail').click(function () {
        $('.modal-body').empty();
        var title = $(this).parent('a').attr("title");
        $('.modal-title').html(title);
        $($(this).parents('div').html()).appendTo('.modal-body');
        $('#myModal').modal({ show: true });
        $('body').removeClass('modal-open').css("padding-right", "0");
        $('.blurContainer').addClass('modal-open');
    });
});
        
        